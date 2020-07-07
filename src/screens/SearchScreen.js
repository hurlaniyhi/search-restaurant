import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar.js"
import useRestaurant from "../Hooks/useRestaurant.js"
import RestaurantList from "../components/RestaurantList"


const SearchScreen = () => {

  const [term, setTerm] = useState("")
  const [searchApi, errorMessage, restaurants] = useRestaurant()
 
  const filterRestaurantsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return restaurants.filter(restaurant => {
      return restaurant.price === price
    })
  }
  

  return(
       
      <> 
          <SearchBar 
          onTermChange={(newTerm) => setTerm(newTerm)} 
          onTermSubmit={() => searchApi(term)}/>
          {errorMessage ? <Text style={{color: "red", paddingLeft: 20}}>{errorMessage}</Text> : null}
          {/* <Text style={{paddingLeft: 20}}>We have found {restaurants.length} results</Text> */}
          <ScrollView>
          <RestaurantList restaurants={filterRestaurantsByPrice("$")} title="Cost Effective" />
          <RestaurantList restaurants={filterRestaurantsByPrice("$$")} title="Big Pricer" />
          <RestaurantList restaurants={filterRestaurantsByPrice("$$")} title="Big Spender" />
          </ScrollView>
      </>
      
     
  )
} 

const styles = StyleSheet.create({})

export default SearchScreen;

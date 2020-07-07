import React from 'react'
import {withNavigation} from 'react-navigation'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

import ResultsDetail from './ResultDetail'

const RestaurantList = (props) => {
    if(!props.restaurants.length){
        return null
    }
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => props.navigation.navigate("Detail",{ id: item.id})}>
                  <ResultsDetail result={item}/>
                </TouchableOpacity>
            )
        }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingBottom: 5 
    },
    container: {
        marginBottom: 15
    }
}) 

export default withNavigation(RestaurantList)
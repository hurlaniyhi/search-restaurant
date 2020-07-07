import React, {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet, FlatList} from 'react-native'
import yelpApi from "../Api/yelpApi"
import ResultsDetail from '../components/ResultDetail'

const ShowDetailScreen = (props) => {
    const [details, setDetails] = useState(null)
    const id = props.navigation.getParam("id")

    

    const getDetails = async (id) => {
        const response = await yelpApi.get(`/${id}`)
        setDetails(response.data)
    }
    
    useEffect(() => {
        getDetails(id)
    }, [])

    if(!details){
        return null
    }
    
    return(
        <View style={styles.container}>
        <Text style= {styles.name}>{details.name} Restaurant</Text>
        <FlatList 
          data={details.photos}
          keyExtractor={(photo) => photo}
          renderItem={({item}) => {
              return (
                  <>
                  <Image style={styles.image} source={{uri: item}} />
                  </>
              )
          }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 210,
        width: 380,
        borderRadius: 5,
        marginBottom: 15
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 15
    },
    container: {
        alignItems: "center"
    }
})

export default ShowDetailScreen
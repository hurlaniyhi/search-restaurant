import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'


const ResultsDetail = (props) => {
    return (
        <View style={{marginLeft: 20}}>
            <Image style={styles.image} source={{uri: props.result.image_url}} /> 
            <Text style={styles.name}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold"
    }
})


// image initially will not show unless you give it height and width
export default ResultsDetail
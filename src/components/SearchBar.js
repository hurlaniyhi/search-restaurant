import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = (props) => {
  return(
      <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.icon} />
          <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle} 
          placeholder="Search" 
          onChangeText={props.onTermChange}
          onEndEditing={props.onTermSubmit} // its used when we dont have submit button but want to perform some operation when user click Done on their keyboard
          />
      </View>
  )
} 

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: "grey", //#F0EEEE
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:"row",
        marginBottom: 10
    },
    inputStyle:{
        fontSize: 18,
        flex: 1
    },
    icon: {
        fontSize: 35,
        marginHorizontal: 10,
        alignSelf: "center"
    }
})

export default SearchBar;

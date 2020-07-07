import {useEffect, useState} from 'react'
import yelpApi from "../Api/yelpApi.js"

export default () => {
    const [restaurants, setRestaurant] = useState([])  // to hold the response from api request
  const [errorMessage, setErrorMessage] = useState("");
  

  const searchApi = async (anystring) => {
    try{
    // making a get request to the api stated in yelpApi.js file with search route and assigning the response to response variable
    const response = await yelpApi.get('/search', {
      params: {                                // data to be sent to make the request. we place the data as value to params key because the api we are making request to requires the data to be query string
        limit: 50,
        term: anystring,
        location: 'san jose'
      }
    }) 
    setRestaurant(response.data.businesses)
    setErrorMessage("")
    console.log("Hi overthere!")

  } catch (err) {
    setErrorMessage("Something went wrong")
  }

  }

  useEffect(()=>{        // anycode inside useEffect will be rendered once the first time the component is rendered
    searchApi("pasta")
  },[])

   // // making request without async just like in react
  // const searchApi =  () => {
  //   // making a get request to the api stated in yelpApi.js file with search route
  //   yelpApi.get('/search')
  //   .then()... just like in react
    

  // }
  
  return [searchApi, errorMessage, restaurants]
}
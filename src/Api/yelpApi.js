import  axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 5lQKKWaFBrWwjL4PZRKy5otK27JiDPnVkJ91VQvgEwMFTREFdWM_QuYpBy60YnpQvpV5q7EzV8QcJi7yJxtBVjYMk1v7GVX-6JCgAj_n6i6UKucfyQF5xm--WrP8XnYx"
    }
})
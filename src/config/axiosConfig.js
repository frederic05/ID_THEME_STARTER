import axios from "axios"
const token = localStorage.getItem('token')

export default axios.create({

    baseURL: 'http://localhost:2533/',
     headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token?.data}` 
      }
})


axios.interceptors.response.use((request) => {

    if (token) {
         request.headers.common.Authorization = `Bearer ${token?.data}`
    }

    return request
  })
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-breaking-bread-36df4.cloudfunctions.net/api'
    // 'http://localhost:5003/breaking-bread-36df4/us-central1/api', // the api (cloud function url)

})

export default instance;
import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer TvuONnomZH1c5ltUGfovs-qE9NMQdYPScMwCXrhlajRe_WSO7YGqmvk3sV1ltfZo_bm4JCPDU6T4P-D7fSSe6Ia1GnhZQgQh2VyiGyfb8zBZ8xc3y3OR4DM45wD_YHYx'
  }
})
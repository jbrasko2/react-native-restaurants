import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async searchTerm => {
    console.log('search')
    try {
      const response = await yelp.get('/search', {
        // params appended to request URL, e.g. /search/wendys
        params: {
          limit: 50,
          term: searchTerm,
          location: 'chicago',
        },
      })
      // .data comes from axios - entire response
      setResults(response.data.businesses)
    } catch (err) {
      setError('Something went wrong!')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, error]
}

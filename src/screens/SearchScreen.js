import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async searchTerm => {
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

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

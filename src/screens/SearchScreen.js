import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, error] = useResults()

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
      <ResultsList title='Cost Effective' />
      <ResultsList title='Bit Pricier' />
      <ResultsList title='Big Spender' />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

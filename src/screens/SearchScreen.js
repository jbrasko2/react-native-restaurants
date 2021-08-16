import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, error] = useResults()

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title='Super Big Spender'
          navigation={navigation}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

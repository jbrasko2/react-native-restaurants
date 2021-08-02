import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name='search1' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 24,
    padding: 12,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
})

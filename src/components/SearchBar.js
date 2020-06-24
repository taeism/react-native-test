import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name='search' />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'darkgray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: 'white',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar
import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native'

const ResultsList = ({ title, results }) => {
    if (!results.length) {
        return null
    }

    const navigation = useNavigation()

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => {
                return result.id
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })} >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                    )
            }}
            showsHorizontalScrollIndicator={false}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList
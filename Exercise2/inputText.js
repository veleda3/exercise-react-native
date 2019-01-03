import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#454754',
        marginHorizontal: 50,
        padding: 14,
        borderRadius: 2,
        marginBottom: 14,
        color: '#EEF1F5',
        fontWeight: '600',
        fontSize: 14,
    }
})

export const InputText = (props) => {
    console.log(props)
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor="#6D6F7C"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardAppearance="dark"
            {...props}
        />
    )

}

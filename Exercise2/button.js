import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'


const styles = StyleSheet.create({
    touchable: {
        marginHorizontal: 50,
    },
    button: {
        backgroundColor: '#0CD38A',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 2,
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        letterSpacing: 0,
    }
})

export const Button = () => {

    return (
        <TouchableHighlight
            onPress={() => null}
            style={styles.touchable}
        >
        <View style={styles.button}>
            <Text style={styles.text}>Sign in</Text>
        </View>
      </TouchableHighlight>
    )
}


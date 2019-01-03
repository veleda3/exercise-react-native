import React, { Component } from 'react'
import { Image, StyleSheet, View, Animated } from 'react-native'

const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        top: 0
    },
    container: {
        position: 'relative',
        backgroundColor: '#e1e4e8',
        borderRadius: 10
    }
})

export default class ProgressiveImage extends Component {

    thumbnailAnimated = new Animated.Value(0)
    imageAnimated = new Animated.Value(0)

    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
            toValue: 1,
        }).start()
    }

    handleImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1
        }).start()
    }

    render() {
        const {
            thumbnailSource,
            source,
            style,
            ...props
        } = this.props
        return (
            <View style={styles.container}>
                <Animated.Image
                    {...props}
                    source={thumbnailSource}
                    style={[style, {opacity: this.thumbnailAnimated}]}
                    blurRadius={2}
                    onLoad={this.handleThumbnailLoad}
                />
                <Animated.Image
                    {...props}
                    source={source}
                    style={[styles.imageOverlay, style, {opacity: this.imageAnimated}]}
                    onLoad={this.handleImageLoad}
                />             
            </View>

        )
    }
}


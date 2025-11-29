import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import image from './assets/image.jpg';
import Search from './Search';

export default function Home({ navigation, route }) {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.background}>
            <Search navigation={navigation} route={route} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

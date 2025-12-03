import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Stack
                screenOptions={{
                    headerShown: false, // hide all headers
                    gestureEnabled: true,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // full-screen black background
    },
});

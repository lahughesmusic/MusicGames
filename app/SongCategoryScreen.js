// app/SongCategoryScreen.tsx   (save exactly with this filename)

import { useFocusEffect } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useCallback } from 'react';
import {
    ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text,
    TouchableOpacity, useWindowDimensions, View
} from 'react-native';

// Expo Router gives you the navigation prop automatically on screen components
import { useRouter } from 'expo-router';

import image from './assets/image.jpg';

const songCategories = [
    "Show All",
    "One Hand",
    "One Hand, 8th Notes",
    "C Position",
    "C Position, 8th Notes",
    "Middle C Position",
    "Middle C Position, 8th Notes",
];

// This exact function name MUST match the filename (SongCategoryScreen)
export default function SongCategoryScreen() {
    const router = useRouter();                 // ← Expo Router way
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    // Force portrait when this screen is focused
    useFocusEffect(
        useCallback(() => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            return () => ScreenOrientation.unlockAsync();
        }, [])
    );

    const handlePress = (category) => {
        // Change 'Search' to whatever screen/file you have (e.g. 'search', '(search)', etc.)
        router.push({
            pathname: '/Search',   // or just 'Search' if you have app/Search.tsx
            params: { category },
        });
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {songCategories.map((cat, index) => (
                        <React.Fragment key={cat}>
                            <TouchableOpacity
                                style={[styles.invisibleButton, isTablet && styles.buttonTablet]}
                                onPress={() => handlePress(cat)}
                            >
                                <Text
                                    style={[styles.buttonText, isTablet && styles.buttonTextTablet]}
                                    numberOfLines={2}
                                    adjustsFontSizeToFit
                                    minimumFontScale={0.5}
                                >
                                    {cat}
                                </Text>
                            </TouchableOpacity>

                            {index < songCategories.length - 1 && (
                                <View style={styles.divider} />
                            )}
                        </React.Fragment>
                    ))}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

// Styles unchanged (they were already perfect)
const styles = StyleSheet.create({
    safeContainer: { flex: 1, backgroundColor: 'black' },
    background: { flex: 1, width: '100%', height: '100%' },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    invisibleButton: {
        paddingVertical: 10,
        paddingHorizontal: 1,
        backgroundColor: 'transparent',
    },
    buttonTablet: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FF6B4A',
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '150',
        fontSize: 25,
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        transform: [{ scaleY: 1.3 }],
    },
    buttonTextTablet: {
        fontSize: 40,
    },
    divider: {
        height: 2,
        width: '10%',
        backgroundColor: 'black',
        marginVertical: 50,
    },
});
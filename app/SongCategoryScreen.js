import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useCallback } from 'react';
import {
    ImageBackground,
    ScrollView, StatusBar, StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';

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

export default function SongCategoryScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    // Lock to portrait when screen is focused
    useFocusEffect(
        useCallback(() => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
                .catch(console.warn);

            return () => {
                // Unlock when leaving this screen
                ScreenOrientation.unlockAsync().catch(console.warn);
            };
        }, [])
    );

    const handlePress = (category) => {
        const encodedCategory = encodeURIComponent(category);
        router.push(`/Search?category=${encodedCategory}`);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    background: { flex: 1 },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100,
        paddingHorizontal: 20,
    },
    invisibleButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
    },
    buttonTablet: {
        paddingVertical: 20,
        paddingHorizontal: 50,
    },
    buttonText: {
        color: '#FF6B4A',
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '200',
        fontSize: 28,
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        transform: [{ scaleY: 1.4 }],
    },
    buttonTextTablet: { fontSize: 48 },
    divider: {
        height: 2,
        width: '15%',
        backgroundColor: '#FF6B4A',
        marginVertical: 50,
        opacity: 0.6,
    },
});

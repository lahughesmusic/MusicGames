import { HeaderBackButton } from '@react-navigation/elements';
import { useFocusEffect } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useCallback } from 'react';
import {
    Image,
    ImageBackground, Platform, ScrollView, StatusBar, StyleSheet,
    Text, useWindowDimensions, View
} from 'react-native';

import bgImage from './assets/image.jpg';
import songEntries from './Data1';

export default function SheetMusic() {
    const router = useRouter();
    const { title, category } = useLocalSearchParams();
    const { width, height } = useWindowDimensions();


    useFocusEffect(
        useCallback(() => {

            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
                .catch(console.warn);

            return () => {

                ScreenOrientation.unlockAsync();
            };
        }, [])
    );

    const images = React.useMemo(() => {
        if (!title || !category) return [];

        const found = songEntries.find(song => {
            const songTitle = (song.title || '').toLowerCase().trim();
            const songCat = (song.category || '').toLowerCase().trim();
            const searchTitle = (title || '').toString().toLowerCase().trim();
            const searchCat = (category || '').toString().toLowerCase().trim();
            return songTitle === searchTitle && songCat === searchCat;
        });

        return found ? found.path : [];
    }, [title, category]);

    if (images.length === 0) {
        return (
            <View style={styles.fallback}>
                <Text style={styles.fallbackText}>
                    No sheet found for "{title}" in {category}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground source={bgImage} style={styles.background} resizeMode="stretch">
                <HeaderBackButton
                    tintColor="#FF6B4A"
                    onPress={() => router.back()}
                    style={{ marginLeft: 10, marginBottom: 10 }}
                />

                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                    bounces={false}
                >
                    {images.map((img, index) => (
                        <View key={index} style={{ width, height: height - (Platform.OS === 'ios' ? 0 : 0) }}>
                            <Image source={img} style={styles.image} resizeMode="contain" />
                        </View>
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    background: { flex: 1, width: '100%', height: '100%' },
    image: { width: '100%', height: '100%' },
    fallback: { flex: 1, backgroundColor: '#111', justifyContent: 'center', alignItems: 'center', padding: 20 },
    fallbackText: { color: '#fff', fontSize: 24, textAlign: 'center' },
});

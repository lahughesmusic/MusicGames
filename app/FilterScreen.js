import { useFocusEffect } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React from 'react';
import {
    ImageBackground, StyleSheet, Text,
    TouchableOpacity, useWindowDimensions, View
} from 'react-native';
import image from './assets/image.jpg';



const homeCategories = ['Songs', 'Musical Hangman', 'Flashcards'];

export default function FilterScreen({ navigation }) {
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    // 🔒 Lock screen to portrait mode when focused
    useFocusEffect(
        React.useCallback(() => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            return undefined;
        }, [])
    );

    const handlePress = (cat) => {
        if (cat === 'Musical Hangman') {
            navigation.navigate('MusicalHangman');
        } else if (cat === 'Flashcards') {
            navigation.navigate('NoteRecognitionSubcategoryScreen');
        } else if (cat === 'Songs') {
            navigation.navigate('SongCategoryScreen');
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {homeCategories.map((cat, index) => (
                    <React.Fragment key={cat}>
                        <TouchableOpacity
                            style={[styles.invisibleButton, isTablet && styles.buttonTablet]}
                            onPress={() => handlePress(cat)}
                        >
                            <Text style={[styles.buttonText, isTablet && styles.buttonTextTablet]}>
                                {cat}
                            </Text>
                        </TouchableOpacity>

                        {index < homeCategories.length - 1 && (
                            <View style={styles.divider} />
                        )}
                    </React.Fragment>
                ))}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    invisibleButton: {
        paddingVertical: 10,
        paddingHorizontal: 1,
        backgroundColor: 'transparent',
    },
    buttonTablet: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        // Remove width: 300 so text isn't constrained
    },
    // ['#4EEAF6', '#FF6B4A', '#AEE637',]
    buttonText: {
        color: '#FF6B4A',
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '100',
        fontSize: 50, // Now this will render full size
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        transform: [{ scaleY: 1.3 }],
    },

    buttonTextTablet: {
        fontSize: 100,
    },
    divider: {
        height: 2,             // thickness of the line
        width: '60%',          // length of the line
        backgroundColor: '#FF6B4A', // matches your text color
        marginVertical: 50,    // spacing between lines
    },
});

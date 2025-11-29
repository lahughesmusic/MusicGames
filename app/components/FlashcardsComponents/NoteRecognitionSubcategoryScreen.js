import React from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import image from '../assets/image.jpg';
import FlashcardData from './FlashcardData'; // ✅ confirm path

const LABEL_TO_KEY = {
    'Bass Clef': 'BassClef',
    'Treble Clef': 'TrebleClef',
    All: 'All',
};

const subcategories = ['Bass Clef', 'Treble Clef', 'All'];

export default function NoteRecognitionSubcategoryScreen({ navigation }) {
    const handlePress = (label) => {
        const key = LABEL_TO_KEY[label];

        let cards = [];
        if (key === 'All') {
            // merge every subcategory in NoteRecognition
            const buckets = Object.values(FlashcardData?.NoteRecognition ?? {});
            cards = buckets.filter(Array.isArray).flat();
        } else {
            cards = FlashcardData?.NoteRecognition?.[key] ?? [];
        }

        if (!cards.length) {
            Alert.alert('No cards', `No cards found for "${label}".`);
            return;
        }

        // optional: shuffle without mutating originals
        const shuffled = cards.slice().sort(() => Math.random() - 0.5);

        navigation.navigate('FlashcardViewer', {
            cards: shuffled,
            title: `Note Recognition — ${label}`,
        });
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                {subcategories.map((sub, idx) => (
                    <React.Fragment key={sub}>
                        <TouchableOpacity style={styles.invisibleButton} onPress={() => handlePress(sub)}>
                            <Text style={styles.buttonText}>{sub}</Text>
                        </TouchableOpacity>
                        {idx < subcategories.length - 1 && <View style={styles.divider} />}
                    </React.Fragment>
                ))}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: 'black' },
    background: { width: '100%', height: '100%', justifyContent: 'center', paddingHorizontal: 20 },
    invisibleButton: {
        paddingVertical: 10,
        paddingHorizontal: 1,
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#FF6B4A',
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '100',
        fontSize: 50, // Now this will render full size
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        transform: [{ scaleY: 1.2 }],
    },
    divider: {
        height: 2,             // thickness of the line
        width: '40%',          // length of the line
        backgroundColor: '#FF6B4A', // matches your text color
        marginVertical: 50,
        alignSelf: 'center'  // spacing between lines
    },
    buttonTablet: {
        color: '#FF6B4A',
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '100',
        fontSize: 100, // Now this will render full size
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        transform: [{ scaleY: 1.2 }],
        // Remove width: 300 so text isn't constrained
    },
});

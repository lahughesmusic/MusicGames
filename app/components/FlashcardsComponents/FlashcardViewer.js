import React, { useState } from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallIphone = Platform.OS === 'ios' && Math.min(width, height) < 400;
const scale = isSmallIphone ? 3 : width / 375;

export default function FlashcardViewer({ route }) {
    const { cards } = route.params || {};
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    if (!cards || !Array.isArray(cards) || cards.length === 0) {
        console.log('Invalid or empty cards:', cards);
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>No flashcards available.</Text>
            </View>
        );
    }

    const currentCard = cards[index];

    const handleNext = () => {
        setShowAnswer(false);
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const handleFlip = () => {
        if (currentCard.answer) {
            setShowAnswer((prev) => !prev);
        }
    };

    const imageSource = currentCard.static
        ? currentCard.static
        : showAnswer
            ? currentCard.answer
            : currentCard.question;

    console.log('Current card:', currentCard, 'Image source:', imageSource);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleFlip} style={styles.card}>
                {imageSource ? (
                    <Image
                        source={imageSource}
                        style={styles.image}
                        resizeMode="contain"
                        onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
                    />
                ) : (
                    <Text style={styles.errorText}>No image available</Text>
                )}
            </TouchableOpacity>
            <Text style={styles.hint}>
                {showAnswer ? 'Showing Answer (Tap to Flip)' : 'Tap Card for Answer'}
            </Text>
            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.buttonText}>NEXT CARD</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10 * scale,
    },
    card: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Or 'cover' if you want it to fill completely
        borderRadius: 0,
    },
    nextButton: {
        paddingVertical: 4 * scale,
        paddingHorizontal: 15 * scale,
        borderRadius: 10 * scale,
        marginBottom: 40 * scale,
    },
    buttonText: {
        color: '#FF6B4A',
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 20 * scale,
        textAlign: 'center',
    },
    hint: {
        color: '#4EEAF6',
        fontFamily: 'HelveticaNeue-Light',
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 100,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
    },
});


// MusicalHangman.js
import { useFocusEffect } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useCallback, useEffect, useState } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import noteImages from './helperMap';
import cardBackground from './NewBackgroundCardTemplate.png';
import wordsData from './words.json';

const musicalAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const { width, height } = Dimensions.get('window');
const screenLongSide = Math.max(width, height);
const screenShortSide = Math.min(width, height);
const isAndroid = Platform.OS === 'android';
const isAndroidTablet = isAndroid && screenShortSide >= 600;
const isIpad = Platform.OS === 'ios' && (Platform.isPad || (screenShortSide >= 768 && screenLongSide >= 1024));
const isSmallIphone = Platform.OS === 'ios' && screenShortSide < 400;

const rawScale = screenLongSide / 375;
const scale = isIpad || isAndroidTablet
    ? Math.min(rawScale * 4.2, 4)
    : isSmallIphone
        ? Math.max(rawScale * 0.9, 0.9)
        : isAndroid
            ? Math.max(Math.min(rawScale * 0.9, 3), 0.9)
            : Math.max(Math.min(rawScale, 3), 1);

const colors = ['#4EEAF6', '#FF6B4A', '#AEE637'];

export default function MusicalHangman() {
    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [randomImages, setRandomImages] = useState({});
    const [activeInputIndex, setActiveInputIndex] = useState(null);
    const [gameWon, setGameWon] = useState(false);
    const [lastWord, setLastWord] = useState('');
    const [textColor, setTextColor] = useState('#FFD93D');
    const [orientationHack, setOrientationHack] = useState(0); // iOS fix

    // ============ FORCE LANDSCAPE (WORKS 100%) ============
    useFocusEffect(
        useCallback(() => {
            // Lock to landscape (both directions allowed)
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
                .then(() => {
                    // Tiny hack: forces iOS to respect the rotation immediately
                    setOrientationHack(prev => prev + 1);
                })
                .catch(err => console.warn('Orientation lock failed:', err));

            // When leaving this screen → go back to portrait
            return () => {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            };
        }, [])
    );

    const loadNewWord = () => {
        const wordList = wordsData.wordsData;
        let randomWord;
        do {
            randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        } while (randomWord.toLowerCase() === lastWord.toLowerCase());

        const lowerWord = randomWord.toLowerCase();
        setLastWord(lowerWord);

        const imageChoices = {};
        lowerWord.split('').forEach((letter, i) => {
            const options = noteImages[letter];
            if (Array.isArray(options) && options.length > 0) {
                imageChoices[i] = options[Math.floor(Math.random() * options.length)];
            }
        });

        const guessesInit = lowerWord.split('').map(letter =>
            musicalAlphabet.includes(letter) ? '' : letter
        );

        setWord(lowerWord);
        setGuesses(guessesInit);
        setRandomImages(imageChoices);
        setGameWon(false);
        setActiveInputIndex(null);
    };

    useEffect(() => {
        loadNewWord();
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setTextColor(randomColor);
    }, []);

    useEffect(() => {
        if (word && guesses.join('') === word && !gameWon) {
            setGameWon(true);
            setTimeout(() => {
                Alert.alert('Congratulations!', 'You solved the word!', [
                    { text: 'Next Word', onPress: loadNewWord },
                    { text: 'OK', style: 'cancel' },
                ]);
            }, 2000);
        }
    }, [guesses, word, gameWon]);

    const handleInputTap = (index) => {
        if (musicalAlphabet.includes(word[index])) {
            setActiveInputIndex(index);
        }
    };

    const handleLetterSelect = (letter) => {
        if (activeInputIndex === null) return;

        if (word[activeInputIndex] !== letter) {
            Alert.alert('Incorrect', 'Try again!');
            return;
        }

        const updatedGuesses = [...guesses];
        updatedGuesses[activeInputIndex] = letter;
        setGuesses(updatedGuesses);
        setActiveInputIndex(null);
    };

    const renderNoteAndInputColumns = () => (
        <View style={styles.columnRow}>
            {word.split('').map((letter, index) => {
                const image = randomImages[index];
                const isMusical = musicalAlphabet.includes(letter);
                const isActive = activeInputIndex === index;
                const guessed = guesses[index];

                return (
                    <View key={index} style={styles.columnWrapper}>
                        {isMusical && image ? (
                            <Image source={image} style={styles.noteImage} />
                        ) : (
                            <View style={styles.noteImagePlaceholder} />
                        )}

                        {isMusical ? (
                            <TouchableOpacity
                                style={[styles.displayInput, isActive && styles.activeInput]}
                                onPress={() => handleInputTap(index)}
                            >
                                <Text style={styles.displayInputText}>
                                    {guessed ? guessed.toUpperCase() : ''}
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.displayInput}>
                                <Text style={styles.displayInputText}>
                                    {letter.toUpperCase()}
                                </Text>
                            </View>
                        )}
                    </View>
                );
            })}
        </View>
    );

    const renderLetterOptions = () => (
        <View style={styles.buttonGridWrapper}>
            <Text style={[styles.pickMe, { color: textColor }]}>PICK A NOTE!</Text>
            <View style={styles.buttonGrid}>
                {musicalAlphabet.map(letter => (
                    <TouchableOpacity
                        key={letter}
                        style={styles.letterButton}
                        onPress={() => handleLetterSelect(letter)}
                    >
                        <Text style={styles.letterButtonText}>{letter.toUpperCase()}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <ImageBackground
            source={cardBackground}
            style={[styles.cardBackground, { opacity: orientationHack ? 1 : 1 }]} // iOS hack
            resizeMode="stretch"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.wordWrapper}>
                    {renderNoteAndInputColumns()}
                    {renderLetterOptions()}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    cardBackground: { flex: 1, width: '100%', height: '100%' },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: isAndroidTablet ? 20 * scale : isAndroid ? 4 * scale : 8 * scale,
        paddingBottom: 24 * scale,
    },
    pickMe: {
        fontSize: 16 * scale,
        fontFamily: 'Roboto-Light',
        marginTop: 4 * scale,
        marginBottom: 6 * scale,
        textAlign: 'center',
    },
    wordWrapper: { alignItems: 'center' },
    columnRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginBottom: 2 * scale },
    columnWrapper: { alignItems: 'center', marginHorizontal: 3 * scale, ...(isAndroid && { marginBottom: -3 * scale }) },
    noteImage: { width: 30 * scale, height: 50 * scale, resizeMode: 'contain', marginBottom: isAndroid ? 0 : 1 * scale },
    noteImagePlaceholder: { width: 30 * scale, height: 50 * scale, backgroundColor: 'transparent', marginBottom: isAndroid ? 0 : 1 * scale },
    displayInput: {
        width: 24 * scale,
        height: 20 * scale,
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 4 * scale,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: Platform.OS === 'android' ? 0 : 1 * scale,
    },
    activeInput: { borderColor: '#00f', backgroundColor: '#ddf' },
    displayInputText: { fontSize: 14 * scale, fontWeight: 'bold', textAlign: 'center', color: '#000' },
    buttonGridWrapper: { marginTop: 6 * scale, alignItems: 'center' },
    buttonGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4 * scale },
    letterButton: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#888',
        borderRadius: 2 * scale,
        paddingVertical: 2 * scale,
        paddingHorizontal: 5 * scale,
        marginHorizontal: 1 * scale,
        marginVertical: 1 * scale,
    },
    letterButtonText: { fontSize: 12 * scale, fontWeight: 'bold', color: '#000' },
});
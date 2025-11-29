import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-paper';
import bgImage from './assets/image.jpg'; // ← your background image
import songEntries from './Data1';

function sortAndReassignIds(entries) {
    entries.sort((a, b) => a.title.localeCompare(b.title));
    entries.forEach((entry, index) => {
        entry.id = (index + 1).toString();
    });
    return entries;
}

const sortedSongEntries = sortAndReassignIds(songEntries);

const ItemSeparatorView = () => (
    <View style={{ height: 0.5, width: '95%', backgroundColor: 'black' }} />
);

export default function Search() {
    const navigation = useNavigation();
    const route = useRoute();
    const category = route?.params?.category;

    const initialFiltered =
        category && category !== "Show All"
            ? sortedSongEntries.filter((s) => s.category === category)
            : sortedSongEntries;

    const [songEntriesState, setSongEntriesState] = useState(initialFiltered);
    const [searchValue, setSearchValue] = useState("");
    const arrayHolder = initialFiltered;

    const searchFunction = (text) => {
        const updatedData = arrayHolder.filter((item) => {
            const item_data = `${item.title.toUpperCase()}`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        setSongEntriesState(updatedData);
        setSearchValue(text);
    };

    const getItem = (item) => {
        navigation.navigate('SheetMusic', { title: item.title, category: item.category });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => getItem(item)}>
            <Text style={styles.item}>{item.title.toUpperCase()}</Text>
            <Text style={styles.itemSubtitle}>{item.category}</Text>
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={bgImage} style={styles.background}>
            <View style={styles.overlay}>
                <TextInput
                    placeholder="Search Here..."
                    darkTheme
                    round
                    value={searchValue}
                    onChangeText={searchFunction}
                    autoCorrect={false}
                    keyboardType={'ascii-capable'}
                    style={styles.input}
                />
                <FlatList
                    data={songEntriesState}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={ItemSeparatorView}
                    ListFooterComponent={<View style={{ height: 40 }} />}
                    contentContainerStyle={{ paddingBottom: 40 }}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1, width: '100%', height: '100%' },
    overlay: {
        flex: 1,
        backgroundColor: 'hsla(14, 90%, 10%, 0.40)', // semi-transparent overlay so text is readable
        paddingTop: 30,
        paddingHorizontal: 10,
    },
    input: {
        marginBottom: 10,
    },
    item: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    itemSubtitle: {
        textAlign: 'center',
        color: '#ddd',
        fontSize: 16,
        marginTop: 4,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

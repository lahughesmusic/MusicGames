import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SearchBar } from 'react-native-paper';
import sortedSongEntries from './Data1';

const ItemSeparatorView = () => (
    <View style={{ height: 0.5, width: '95%', backgroundColor: 'black' }} />
);

export default function SearchScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const category = route?.params?.category;

    useEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#FF6B4A',
            headerTitleStyle: { fontWeight: 'bold' },
            headerBackTitleVisible: false,
            title: 'Search',
        });
    }, [navigation]);

    const filtered =
        category && category !== "Show All"
            ? sortedSongEntries.filter((s) => s.category === category)
            : sortedSongEntries;

    const [songEntriesState, setSongEntriesState] = React.useState(filtered);
    const [searchValue, setSearchValue] = React.useState("");

    const arrayholder = filtered;

    const searchFunction = (text) => {
        const updated = arrayholder.filter((item) =>
            item.title.toUpperCase().includes(text.toUpperCase())
        );
        setSongEntriesState(updated);
        setSearchValue(text);
    };

    const getItem = (item) => {
        navigation.navigate("SheetMusic", {
            title: item.title,
            category: item.category,
        });
    };

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search Here..."
                darkTheme
                round
                value={searchValue}
                onChangeText={searchFunction}
                autoCorrect={false}
                keyboardType="ascii-capable"
            />
            <FlatList
                data={songEntriesState}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => getItem(item)}>
                        <Text style={styles.item}>{item.title.toUpperCase()}</Text>
                        <Text style={styles.itemSubtitle}>{item.category}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={ItemSeparatorView}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsla(14, 90%, 10%, 0.40)',
        paddingTop: 10,
    },
    item: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        paddingVertical: 5,
    },
    itemSubtitle: {
        textAlign: 'center',
        color: '#ddd',
        fontSize: 16,
        marginBottom: 5,
    },
});

// app/Search.js   ← Using react-native-elements SearchBar + full background

import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import bgImage from "./assets/image.jpg";
import songEntries from "./Data1";

// Sort songs once
const sortedSongEntries = [...songEntries]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((song, index) => ({ ...song, id: String(index + 1) }));

export default function Search() {
    const router = useRouter();
    const { category } = useLocalSearchParams();

    const initialList =
        category && category !== "Show All"
            ? sortedSongEntries.filter((s) => s.category === category)
            : sortedSongEntries;

    const [searchValue, setSearchValue] = useState("");
    const [filteredSongs, setFilteredSongs] = useState(initialList);
    const backupList = initialList;

    const handleSearch = (text) => {
        setSearchValue(text);
        if (!text.trim()) {
            setFilteredSongs(backupList);
            return;
        }
        const filtered = backupList.filter((item) =>
            item.title.toUpperCase().includes(text.toUpperCase())
        );
        setFilteredSongs(filtered);
    };

    const clearSearch = () => {
        setSearchValue("");
        setFilteredSongs(backupList);
    };

    const openSheet = (item) => {
        router.push({
            pathname: "/SheetMusic",
            params: { title: item.title, category: item.category },
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => openSheet(item)} style={styles.item}>
            <Text style={styles.title}>{item.title.toUpperCase()}</Text>
            {item.category && <Text style={styles.subtitle}>{item.category}</Text>}
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={bgImage} style={styles.background} resizeMode="cover">
            <View style={styles.overlay}>
                {/* react-native-elements SearchBar — beautiful & dark */}
                {/* react-native-elements SearchBar — beautiful & dark, NO QUESTION MARK */}
                <SearchBar
                    placeholder="Search songs..."
                    value={searchValue}
                    onChangeText={handleSearch}
                    onClear={clearSearch}
                    platform="ios"
                    round
                    lightTheme={false}
                    showLoading={false}           // Keeps loading spinner hidden
                    loadingProps={{}}             // Keeps loading spinner hidden
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    placeholderTextColor="#aaa"

                    // ← THIS FIXES THE QUESTION MARK: Custom search icon component
                    searchIcon={
                        () => (
                            <Icon
                                name="search"
                                type="material"
                                color="#FF6B4A"
                                size={26}
                            />
                        )
                    }

                    clearIcon={{ color: "#FF6B4A", size: 26 }}
                    cancelIcon={{ color: "#FF6B4A" }}
                />

                <FlatList
                    data={filteredSongs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1 },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.52)",
        paddingTop: 40,
    },
    searchContainer: {
        backgroundColor: "transparent",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 15,
    },
    inputContainer: {
        backgroundColor: "#1a1a1a",
        borderRadius: 30,
        height: 50,
    },
    input: {
        color: "#fff",
        fontSize: 17,
    },
    item: {
        paddingVertical: 18,
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "rgba(0,0,0,0.9)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    subtitle: {
        color: "#FF8C70",
        fontSize: 15,
        marginTop: 5,
    },
    separator: {
        height: 1,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#555",
        opacity: 0.4,
    },
    list: {
        paddingBottom: 120,
    },
});
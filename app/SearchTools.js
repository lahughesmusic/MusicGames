export default function SearchScreen({ navigation, route }) {
    const category = route?.params?.category;
    console.log("Category received from FilterScreen:", category);

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
            Songs: item.title,
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
                onChangeText={(text) => searchFunction(text)}
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

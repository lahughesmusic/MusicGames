// app/_layout.js
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: '#FF6B4A',
                headerBackTitleVisible: false,

                // THIS LINE REMOVES THE TITLE FROM ALL SCREENS
                headerTitle: '',           // ← hides title completely
                // OR use: headerTitle: ''           // ← alternative (empty string)

                // Optional: keep a tiny bit of space so back button doesn't stick to edge
                headerTitleAlign: 'center',
            }}
        />
    );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import FlashcardViewer from './components/FlashcardsComponents/FlashcardViewer';
import NoteRecognitionSubcategoryScreen from './components/FlashcardsComponents/NoteRecognitionSubcategoryScreen';
import MusicalHangman from './components/HangmanWordGames/MusicalHangman';
import FilterScreen from './FilterScreen';
import Search from './Search';
import SheetMusic from './SheetMusic';
import SongCategoryScreen from './SongCategoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator

      initialRouteName="FilterScreen"
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#FF6B4A',       // back button color
        headerBackTitleVisible: true,    // hides iOS back text
        headerTitle: "",                  // removes the title
        headerShown: false,           // hide the header completely
        contentStyle: { flex: 1 },
      }}
    >
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="SongCategoryScreen" component={SongCategoryScreen} options={{
        headerShown: true,
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#FF6B4A',
        headerBackTitleVisible: false,
        headerTitle: '',
        gestureEnabled: true,
      }} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,                // show the header
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#FF6B4A',       // back button color
          headerBackTitleVisible: false,    // hide iOS back text
          headerTitle: '',                   // no title
          gestureEnabled: true,
        }}
      />
      <Stack.Screen name="SheetMusic" component={SheetMusic}
        options={{
          headerShown: true,                // show the header
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#FF6B4A',       // back button color
          headerBackTitleVisible: false,    // hide iOS back text
          headerTitle: '',                   // no title
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="MusicalHangman"
        component={MusicalHangman}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#FF6B4A',
          headerBackTitleVisible: false,
          headerTitle: '',
          gestureEnabled: true,
        }}
      />
      <Stack.Screen name="NoteRecognitionSubcategoryScreen" component={NoteRecognitionSubcategoryScreen}
        options={{
          headerShown: true,                // show the header
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#FF6B4A',       // back button color
          headerBackTitleVisible: false,    // hide iOS back text
          headerTitle: '',                   // no title
          gestureEnabled: true,
        }} />
      <Stack.Screen name="FlashcardViewer" component={FlashcardViewer}
        options={{
          headerShown: true,                // show the header
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#FF6B4A',       // back button color
          headerBackTitleVisible: false,    // hide iOS back text
          headerTitle: '',                   // no title
          gestureEnabled: true,
        }} />
    </Stack.Navigator>
  );
}
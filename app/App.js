import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import FlashcardViewer from './components/FlashcardsComponents/FlashcardViewer';
import NoteRecognitionSubcategoryScreen from './components/FlashcardsComponents/NoteRecognitionSubcategoryScreen';
import MusicalHangman from './components/HangmanWordGames/MusicalHangman';
import FilterScreen from './FilterScreen';
import Home from './Home';
import SheetMusic from './SheetMusic';
import SongCategoryScreen from './SongCategoryScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Songs tab
function SongsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#222' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="SongCategoryScreen" component={SongCategoryScreen} options={{ title: 'Songs' }} />
      <Stack.Screen name="Search" component={Home} options={{ title: 'Search Songs' }} />
      <Stack.Screen name="SheetMusic" component={SheetMusic} options={{ title: 'Sheet Music' }} />
    </Stack.Navigator>
  );
}

// Stack for Hangman tab
function HangmanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#222' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="MusicalHangman" component={MusicalHangman} options={{ title: 'Musical Hangman' }} />
    </Stack.Navigator>
  );
}

// Stack for Flashcards tab
function FlashcardsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#222' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="NoteRecognitionSubcategoryScreen" component={NoteRecognitionSubcategoryScreen} options={{ title: 'Note Recognition' }} />
      <Stack.Screen name="FlashcardViewer" component={FlashcardViewer} options={{ title: 'Flashcards' }} />
    </Stack.Navigator>
  );
}

// Main App
export default function App() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#222' },
        tabBarActiveTintColor: '#FF6B4A',
        tabBarInactiveTintColor: '#aaa',
      }}
    >
      <Tab.Screen name="SongsTab" component={SongsStack} options={{ title: 'Songs' }} />
      <Tab.Screen name="HangmanTab" component={HangmanStack} options={{ title: 'Hangman' }} />
      <Tab.Screen name="FlashcardsTab" component={FlashcardsStack} options={{ title: 'Flashcards' }} />
    </Tab.Navigator>

  );
}

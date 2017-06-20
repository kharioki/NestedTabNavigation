import React, { Component } from 'react';
import HomeScreen from './components/Home';
import ContactScreen from './components/Contact';
import { TabNavigator } from 'react-navigation';

const App = TabNavigator({
    Home: { screen: HomeScreen },
    Contact: { screen: ContactScreen }
});

export default App;

import React, { Component } from 'react';
import ListScreen from './List';
import DetailScreen from './Detail';
import { TabNavigator } from 'react-navigation';

const Home = TabNavigator({
    List: { screen: ListScreen },
    Detail: { screen: DetailScreen }
}, {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    swipeEnabled: false
});

Home.navigationOptions = {
    tabBarLabel: 'Home',
}

export default Home;

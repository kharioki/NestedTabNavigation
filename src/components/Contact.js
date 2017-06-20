import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Contact extends Component {
    static navigationOptions = {
        tabBarLabel: 'Contact',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>You are now in Component Contact</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        justifyContent: 'center'
    }
});

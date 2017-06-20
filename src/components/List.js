import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class List extends Component {
    static navigationOptions = {
        tabBarLabel: 'List',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Component List</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center'
    }
});

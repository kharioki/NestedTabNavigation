import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Detail extends Component {
    static navigationOptions = {
        tabBarLabel: 'Detail',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>You are now in Component Detail</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'yellow',
        justifyContent: 'center'
    }
});

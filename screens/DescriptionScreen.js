import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DescriptionScreen(props) {
    console.log(props);

    return (
        <View style={ styles.container }>
            <Text>{ props.route.params.title }</Text>
            <Text>{ props.route.params.content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
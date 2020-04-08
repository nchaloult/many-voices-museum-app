import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DescriptionScreen(props) {
    return (
        <>
            <ScrollView>
                <Image
                    source={{ uri: props.route.params.bgImgURI }}
                    style={ styles.img }
                />
                <View style={ styles.container }>
                    <Text style={ styles.title }>{ props.route.params.title }</Text>
                    <Text style={ styles.subtitle }>{ props.route.params.subtitle }</Text>
                    <Text>{ props.route.params.content }</Text>
                </View>
            </ScrollView>
            <View style={ styles.dummyPaddingBottom }></View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    img: {
        width: '100%',
        height: 400,
    },
    title: {
        fontSize: 34,
        fontWeight: '800',
    },
    subtitle: {
        marginBottom: 16,
        fontSize: 24,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#aeaeb2',
    },
    dummyPaddingBottom: {
        paddingTop: 108,
    },
});
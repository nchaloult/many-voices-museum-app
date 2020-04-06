import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

const snapTop = 192;
const snapBottom = Dimensions.get('window').height - 108;

function MediaPlayer(props) {
    const [up, setUp] = useState(false);

    return (
        <View style={ [{ top: up ? snapTop: snapBottom }, styles.container] }>
            <TouchableWithoutFeedback onPress={ () => setUp(!up) } style={ styles.handlebarWrapper }>
                <View style={ styles.handlebar }></View>
            </TouchableWithoutFeedback>
            <SafeAreaView style={ [styles.col, styles.mainInfoWrapper] }>
                <View style={ styles.row }>
                    <View style={ styles.col }>
                        <Text style={ styles.title }>{ props.mediaTitle.mediaTitle }</Text>
                        <Text style={ styles.subtitle }>name - occupation</Text>
                    </View>
                    <View style={ styles.row }>
                        <TouchableOpacity style={ styles.skip }></TouchableOpacity>
                        <TouchableOpacity style={ styles.playpause }></TouchableOpacity>
                        <TouchableOpacity style={ styles.skip }></TouchableOpacity>
                    </View>
                </View>
                <View style={ [{ opacity: up ? 1 : 0 }, styles.expanded] }>
                    <Text>Scrubber goes here.</Text>
                    <Text>The written transcript of the currently-playing audio critique goes here, too.</Text>
                    <Text>This space will be filled up eventually.</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

const mapStateToProps = (state) => {
    const { mediaTitle } = state;
    return {
        mediaTitle,
    };
};

export default connect(
    mapStateToProps,
)(MediaPlayer);

const borderRadius = 24;
const handlebarWidth = Dimensions.get('window').width / 5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingLeft: 26,
        paddingRight: 26,
        alignItems: 'center',

        backgroundColor: '#c7c7cc',
        borderRadius: borderRadius,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
    },
    handlebarWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: handlebarWidth * 2,
        paddingTop: 6,
        paddingBottom: 16,
    },
    handlebar: {
        width: handlebarWidth,
        height: 4,
        backgroundColor: '#aeaeb2',
        borderRadius: 100,
    },
    mainInfoWrapper: {
        width: '100%',
    },
    expanded: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    col: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
    },
    subtitle: {
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#636366',
    },
    playpause: {
        width: 0,
        height: 0,
        margin: 8,
        borderLeftWidth: 28,
        borderTopWidth: 14,
        borderBottomWidth: 14,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'black',
    },
    skip: {
        width: 28,
        height: 28,
        borderRadius: 28 / 2,
        backgroundColor: 'black',
    },
});
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../actions/media';

function Critique(props) {
    const colorIndices = props.colors;

    return (
        <>
        <TouchableOpacity
            style={ [styles.container, styles.row] }
            onPress={ () => props.changeMediaTitle(props.title) }
        >
            <View style={ [styles.col, { alignItems: 'stretch', }] }>
                <Text style={ styles.title }>{ props.title }</Text>
                <Text style={ styles.subtitle }>{ props.subtitle }</Text>
            </View>
            <View style={ styles.col }>
                <Text style={ [styles.duration, styles.rightAligned] }>{ props.duration }</Text>
                <View style={ styles.row }>
                    {
                        props.tags.map((tag, index) => {
                            return (
                                <View key={ index } style={ [styles.tag, { backgroundColor: colors[colorIndices[index]] }] }>
                                    <Text style={ styles.tagText }>{ tag }</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        </TouchableOpacity>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMediaTitle: bindActionCreators(actions.changeMediaTitle, dispatch),
    };
};
export default connect(
    null,
    mapDispatchToProps,
)(Critique);

const screenWidth = Dimensions.get('window').width;
const colors = ['#34c759', '#5ac8fa', '#ff3b30', '#ff9500', '#af52de'];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: screenWidth,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#aeaeb2',
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column',
    },
    rightAligned: {
        textAlign: 'right',
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
    },
    subtitle: {
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#aeaeb2'
    },
    duration: {
        fontWeight: '600',
        color: '#aeaeb2'
    },
    tag: {
        marginLeft: 4,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 100,
    },
    tagText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
    },
});
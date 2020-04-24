import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function getBorderRadius(radius, direction, type) {
    if (direction === 'horizontal' && type === 'first') {
        return {
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius,
        }
    }
    if (direction === 'horizontal' && type === 'middle') {
        return null
    }
    if (direction === 'horizontal' && type === 'last') {
        return {
            borderTopRightRadius: radius,
            borderBottomRightRadius: radius,
        }
    }
    if (direction === 'vertical' && type === 'first') {
        return {
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
        }
    }
    if (direction === 'vertical' && type === 'middle') {
        return null
    }
    if (direction === 'vertical' && type === 'last') {
        return {
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius,
        }
    }
}

export default function ButtonGroup(props) {
    return (
        <View style={[styles.container, { flexDirection: props.vertical ? 'column' : 'row' }]}>
            <TouchableOpacity style={[styles.button, getBorderRadius(5, props.vertical ? 'vertical' : 'horizontal', 'first')]}>
                <Text style={styles.label}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, getBorderRadius(5, props.vertical ? 'vertical' : 'horizontal', 'middle')]}>
                <Text style={styles.label}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, getBorderRadius(5, props.vertical ? 'vertical' : 'horizontal', 'last')]}>
                <Text style={styles.label}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        borderColor: 'green',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
    },
});

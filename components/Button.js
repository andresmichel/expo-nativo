import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
        backgroundColor: '#000',
        borderColor: 'blue',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

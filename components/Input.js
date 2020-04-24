import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Input(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.label} placeholder={'Escribe...'}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
    },
    label: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        borderColor: '#eee',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
});

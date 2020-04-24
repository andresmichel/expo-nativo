import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Avatar(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
            <Text
                style={styles.label}
                numberOfLines={1}
                ellipsizeMode={'clip'}
                adjustsFontSizeToFit
            >{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 30,
        overflow: 'hidden',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        position: 'absolute',
        height: 60,
        width: 60,
    },
});

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Avatar(props) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
                numberOfLines={1}
                ellipsizeMode={'clip'}
            >{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: StyleSheet.hairlineWidth,
        marginRight: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
});

import React, { useRef } from 'react';
import { Animated, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Image() {
    return (
        <View style={{ height: 10, width: 10, backgroundColor: 'red' }} />
    );
}

export default function SearchBox(props) {
    const input = useRef(null);
    const animatedVal = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <TextInput
                ref={input}
                style={styles.input}
                placeholder={'Escribe...'}
                clearButtonMode={'always'}
                onFocus={() => {
                    Animated.timing(animatedVal, {
                        toValue: 1,
                        duration: 300,
                    }).start();
                }}
                onBlur={() => {
                    Animated.timing(animatedVal, {
                        toValue: 0,
                        duration: 300,
                    }).start();
                }}
            />
            <View style={styles.iconWrapper} pointerEvents={'none'}>
                <MaterialIcons size={24} color={'rgba(0,0,0,0.3)'} name={'search'} />
            </View>
            <Animated.View style={{
                width: animatedVal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                }),
                opacity: animatedVal.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: [0, 1],
                }),
            }}>
                <TouchableOpacity
                    style={styles.cancelWrapper}
                    onPress={() => {
                        input.current.clear();
                        input.current.blur();
                    }}>
                    <Text numberOfLines={1} ellipsizeMode={'clip'}>Cancel</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 36,
    },
    input: {
        flex: 1,
        height: '100%',
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        paddingLeft: 36,
        borderColor: '#eee',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    iconWrapper: {
        position: 'absolute',
        left: 7,
    },
    cancelWrapper: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

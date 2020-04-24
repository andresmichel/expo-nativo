import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function Drawer(props) {
    const x = useRef(new Animated.Value(-props.width)).current;
    useEffect(() => {
        if (props.visible) {
            Animated.timing(x, {
                toValue: 0,
                duration: 300,
            }).start();
        } else {
            Animated.timing(x, {
                toValue: -props.width,
                duration: 300,
            }).start();
        }
    });
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    width: props.width,
                    transform: [
                        { translateX: x }
                    ]
                }
            ]}>
            {props.children}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(0,0,255,0.8)',
        position: 'absolute',
    },
});

import React, { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export default function CardView(props) {
    const pan = useRef(new Animated.ValueXY({ x: 0, y: 60 })).current;
    let isOpen = useRef(false).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                if (!isOpen) return true;
                if (isOpen && gestureState.dy > 0) {
                    return true;
                }
                return false;
            },
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event([
                null,
                { dy: pan.y }
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                pan.flattenOffset();
                if (gestureState.dy > 0) {
                    isOpen = (false);
                    Animated.timing(pan.y, {
                        toValue: 60,
                        duration: 200,
                    }).start();
                } else {
                    isOpen = (true);
                    Animated.timing(pan.y, {
                        toValue: -400,
                        duration: 200,
                    }).start();
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
        })
    ).current;
    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[
                styles.container,
                {
                    height: pan.y.interpolate({
                        inputRange: [-500, -400, 60],
                        outputRange: [410, 400, 60],
                        extrapolateLeft: 'extend',
                        extrapolateRight: 'clamp',
                    })
                }
            ]}
        >
            <View style={{ flex: 1, width: '100%' }}>
                {props.children}
            </View>
            <View style={styles.pullStick} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    pullStick: {
        position: 'absolute',
        top: 10,
        height: 4,
        width: 60,
        backgroundColor: '#000',
        borderRadius: 2,
        alignSelf: 'center',
    },
});

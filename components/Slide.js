import React, { useRef } from 'react';
import { Animated, StyleSheet, View, PanResponder, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Slide(props) {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: (event, gestureState) => {
                if (gestureState.dx >= 0 && gestureState.dx <= 300) {
                    Animated.event(
                        [
                            null,
                            { dx: pan.x, dy: 0 }
                        ]
                    )(event, gestureState);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 290) {
                    alert('Yes');
                }
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 }
                }).start();
                // pan.flattenOffset();
            },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderTerminate: (evt, gestureState) => {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 }
                }).start();
            },
        })
    ).current;
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Slide to unlock</Text>
            <Animated.View
                style={[
                    styles.buttonWrapper,
                    {
                        transform: [{ translateX: pan.x }, { translateY: pan.y }]
                    }
                ]}
                {...panResponder.panHandlers}
            >
                <View style={styles.button}>
                    <MaterialIcons name={'arrow-forward'} color={'#fff'} size={24} />
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 50,
        backgroundColor: '#eee',
        borderColor: '#eee',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    buttonWrapper: {
        position: 'absolute',
        height: '100%',
        padding: 5,
    },
    button: {
        height: '100%',
        width: 50,
        backgroundColor: '#000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.3)',
        alignSelf: 'center',
    },
});

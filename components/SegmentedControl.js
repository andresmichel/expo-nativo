import React, { useRef } from 'react';
import { Animated, StyleSheet, View, PanResponder, Text } from 'react-native';

export default function SegmentedControl(props) {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: () => { },
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dx > 100) {
                    Animated.spring(pan, {
                        toValue: { x: 180, y: 0 }
                    }).start();
                } else if (gestureState.dx < -100) {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 }
                    }).start();
                }
            },
            onPanResponderRelease: () => { },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
        })
    ).current;
    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    { width: `${100 / props.data.length}%` },
                    styles.buttonWrapper,
                    {
                        transform: [{ translateX: pan.x }, { translateY: pan.y }]
                    }
                ]}
                {...panResponder.panHandlers}
            >
                <View style={styles.button} />
            </Animated.View>
            {props.data.map((item, index) => (
                <View pointerEvents={'none'} style={styles.labelWrapper} key={index}>
                    <Text style={styles.label}>{item}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 46,
        backgroundColor: '#eee',
        borderColor: '#eee',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        flexDirection: 'row',
    },
    labelWrapper: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
    },
    buttonWrapper: {
        position: 'absolute',
        height: '100%',
        padding: 5,
    },
    button: {
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, Animated, PanResponder, Image, StyleSheet, View, Button } from 'react-native';

export default function CardView(props) {
    const [scrollEnabled, setScrollEnabled] = useState(false);
    let open = useRef(false).current;
    let isOnTop = useRef(false);
    const pan = useRef(new Animated.ValueXY({ x: 0, y: 400 })).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // if (open) {
                //     if (gestureState.dy < 0) {
                //         setScrollEnabled(true);
                //     } else {
                //         setScrollEnabled(false);
                //     }
                // } else {
                //     setScrollEnabled(false);
                // }
                return true
            },
            // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: (evt, gestureState) => {
                if (open) {
                    if (isOnTop.current) {
                        Animated.event([
                            null,
                            { dy: pan.y },
                        ])(evt, gestureState);
                        if (Number(pan.y.__getValue()) < 0) {
                            setScrollEnabled(true);
                        } else {
                            setScrollEnabled(false);
                        }
                    } else {

                    }
                } else {
                    Animated.event([
                        null,
                        { dy: pan.y },
                    ])(evt, gestureState);
                    if (Number(pan.y.__getValue()) < 0) {
                        setScrollEnabled(true);
                    } else {
                        setScrollEnabled(false);
                    }
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                pan.flattenOffset();
                if (open) {
                    // console.log('open')
                    // console.log(typeof isOnTop.current, isOnTop.current)
                    if (isOnTop.current) {
                        // console.log('isOnTop')
                        if (gestureState.dy > 0) {
                            // console.log('gestureState.dy > 0')
                            Animated.timing(pan.y, {
                                toValue: 400,
                                duration: 200,
                            }).start(() => {
                                open = false;
                            });
                        }
                    } else {
                        // 
                    }
                } else {
                    if (gestureState.dy < 0) {
                        Animated.timing(pan.y, {
                            toValue: 0,
                            duration: 200,
                        }).start(() => {
                            open = true;
                        });
                    }
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
        })
    ).current;
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: pan.y.interpolate({
                                inputRange: [0, 400],
                                outputRange: [0, 400],
                                extrapolate: 'clamp',
                            })
                        }
                    ],
                }
            ]}
        >
            <ScrollView
                onScroll={event => {
                    const offset = event.nativeEvent.contentOffset.y;
                    if (offset <= 0) {
                        isOnTop.current = true;
                        // console.log('isOnTop is true');
                    } else {
                        isOnTop.current = false;
                        // console.log('isOnTop is false');
                    }
                }}
                {...panResponder.panHandlers}
                scrollEventThrottle={16}
                style={{ flex: 1, backgroundColor: 'red' }}
                bounces={scrollEnabled}
            >
                <View style={[
                    {
                        flex: 1,
                        // height: 400,
                        // overflow: 'hidden',
                    },
                ]}>
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Button title={'test'} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Button title={'test'} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Button title={'test'} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Button title={'test'} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                    <Button title={'test'} />
                </View>
            </ScrollView>
            <View style={styles.pullStick} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 500,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        height: 60,
        width: 60,
        backgroundColor: 'blue'
    },
    pullStick: {
        position: 'absolute',
        top: 10,
        height: 4,
        width: 60,
        backgroundColor: '#000',
        borderRadius: 2,
        alignSelf: 'center',
    }
});

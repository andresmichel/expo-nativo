import React, { useRef, useState } from 'react';
import { Image, Animated, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Carousel(props) {
    const [width, setWidth] = useState(0);
    const scrollRef = useRef(null);
    const pan = useRef(new Animated.ValueXY()).current;
    return (
        <View
            onLayout={event => setWidth(event.nativeEvent.layout.width)}
            style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        { nativeEvent: { contentOffset: { x: pan.x } } }
                    ]
                )}
                ref={scrollRef}
                decelerationRate={'fast'}
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <Image style={{ width, height: width }} source={{ uri: 'https://source.unsplash.com/1200x1200?nature' }} />
                <Image style={{ width, height: width }} source={{ uri: 'https://source.unsplash.com/1200x1200?water' }} />
                <Image style={{ width, height: width }} source={{ uri: 'https://source.unsplash.com/1200x1200?wind' }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#eee',
        overflow: 'hidden',
    },
    tabContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center'
    },
    item: {
        height: 100,
        width: 100,
    },
    indicator: {
        height: 2,
        backgroundColor: '#000',
        position: 'absolute',
        width: '33.33%',
        bottom: 0,
    },
});

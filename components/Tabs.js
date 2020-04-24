import React, { useRef, useState } from 'react';
import { Text, Animated, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Tabs(props) {
    const [width, setWidth] = useState(0);
    const scrollRef = useRef(null);
    const pan = useRef(new Animated.ValueXY()).current;
    return (
        <View
            onLayout={event => setWidth(event.nativeEvent.layout.width)}
            style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tab} onPress={() => scrollRef.current.scrollTo({ x: 0 })}>
                    <Text style={styles.label}>Hola</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => scrollRef.current.scrollTo({ x: width })}>
                    <Text style={styles.label}>Hola</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => scrollRef.current.scrollTo({ x: width * 2 })}>
                    <Text style={styles.label}>Hola</Text>
                </TouchableOpacity>
                <Animated.View style={[
                    styles.indicator,
                    {
                        transform: [{
                            translateX: pan.x.interpolate({
                                inputRange: [0, width * 3],
                                outputRange: [0, width]
                            })
                        }]
                    }
                ]} />
            </View>
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
                <View style={[styles.item, { width, backgroundColor: 'cyan' }]} />
                <View style={[styles.item, { width, backgroundColor: 'magenta' }]} />
                <View style={[styles.item, { width, backgroundColor: 'yellow' }]} />
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

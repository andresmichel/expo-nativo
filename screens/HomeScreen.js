import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import Slide from '../components/Slide';
import SegmentedControl from '../components/SegmentedControl';
import Tabs from '../components/Tabs';
import Carousel from '../components/Carousel';
import Input from '../components/Input';
import SearchBox from '../components/SearchBox';
import Avatar from '../components/Avatar';
import Tag from '../components/Tag';
import CardView from '../components/CardView';
import ButtonGroup from '../components/ButtonGroup';
import Drawer from '../components/Drawer';
import BottomSheet from '../components/BottomSheet';

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 10 }}
        keyboardShouldPersistTaps={'always'}
      >
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View pointerEvents={'none'}>
            <Button title={visible ? 'Visible' : 'Nel'} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ButtonGroup title={'test'} />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Tag title={'andres'} />
          <Tag title={'michel'} />
          <Tag title={'gonzalez'} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Avatar title={'AM'} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <SearchBox />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Input />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title={'Hola'} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Slide />
        </View>
        <View style={{ marginBottom: 10 }}>
          <SegmentedControl data={['Uno', 'Dos']} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Tabs data={['Uno', 'Dos']} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Carousel data={['Uno', 'Dos']} />
        </View>
      </ScrollView>
      {/* <CardView /> */}
      <BottomSheet>
        <ScrollView stickyHeaderIndices={[0]}>
          <SearchBox />
          <Carousel data={['Uno', 'Dos']} />
          <Carousel data={['Uno', 'Dos']} />
        </ScrollView>
      </BottomSheet>
      <Drawer width={200} visible={visible} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

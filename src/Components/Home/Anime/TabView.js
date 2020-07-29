/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import About from './About/About';
import Characters from '../Anime/Characters/Characters';
import Staff from './Staff/Staff';
import Review from './Reviews/Review';
import EStyleSheet from 'react-native-extended-stylesheet';
const renderTabBar = (props) => (
  <TabBar
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color,
          fontSize: 16,
          fontFamily: 'Roboto-Bold',
        }}>
        {route.title}
      </Text>
    )}
    tabStyle={{width: 130}}
    scrollEnabled={true}
    onTabPress={({route, preventDefault}) => {
      if (route.key === 'first') {
        // preventDefault();
        // Do something else
      }
    }}
    {...props}
    indicatorStyle={{backgroundColor: '#191725'}}
    style={styles.tabBar}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function AnimeTabView() {
  console.log('animeTabView');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'about', title: 'About'},
    {key: 'characters', title: 'Characters'},
    {key: 'staff', title: 'Staff'},
    {key: 'review', title: 'Review'},
  ]);

  const renderScene = SceneMap({
    about: About,
    characters: Characters,
    staff: Staff,
    review: Review,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = EStyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#191725',
  },
  tabBar: {
    backgroundColor: '#191725',
  },
});

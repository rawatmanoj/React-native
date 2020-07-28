import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import About from './About/About';
import Characters from '../Anime/Characters/Characters';
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

const FirstRoute = () => <View style={styles.scene} />;

const SecondRoute = () => <View style={styles.scene} />;
const initialLayout = {width: Dimensions.get('window').width};

export default function AnimeTabView() {
  console.log('animeTabView');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'about', title: 'About'},
    {key: 'characters', title: 'Characters'},
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    about: About,
    characters: Characters,
    first: FirstRoute,
    second: SecondRoute,
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

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#191725',
  },
  tabBar: {
    backgroundColor: '#191725',
  },
});

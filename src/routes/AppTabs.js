import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Discover from '../Screens/Discover';
import HomeStack from './HomeStack';
import EStyleSheet from 'react-native-extended-stylesheet';

//import {Ionicons, AntDesign, EvilIcons} from 'react-native-vector-icons';
const Tabs = createBottomTabNavigator();

const AppTabs = () => {
  console.log('AppTabs');
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              return <AntDesign name={'home'} size={size} color={color} />;
            } else if (route.name === 'Discover') {
              return <Ionicons name={'flask'} size={size} color={color} />;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: EStyleSheet.value('$spcColor'),
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
          showLabel: false,
          style: {
            backgroundColor: EStyleSheet.value('$baseColor'),
            borderTopWidth: 0,
            // shadowOffset: {width: 0, height: 4},
            // shadowOpacity: 0.9,
            // shadowRadius: 4,
            // elevation: 5,
            // shadowColor: 'black',
          },
        }}>
        <Tabs.Screen name="Home" component={HomeStack} />
        <Tabs.Screen name="Discover" component={Discover} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;

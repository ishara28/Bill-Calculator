import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import home from '../screens/home';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="𝐁𝐢𝐥𝐥 𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫" />
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#003366',
      height: 60
    },
  },
});

export default HomeStack;

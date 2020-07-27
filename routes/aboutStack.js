import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import about from "../screens/about";
import Header from "../shared/header";

const screens = {
  About: {
    screen: about,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} headerText="𝐀𝐛𝐨𝐮𝐭" />
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#003366",
      height: 60
    }
  }
});

export default AboutStack;

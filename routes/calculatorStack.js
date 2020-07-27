import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Header from "../shared/header";
import MyCalc from "../screens/calculator";

const screens = {
  Calculator: {
    screen: MyCalc,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫" />
        )
      };
    }
  }
};

const CalculatorStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#003366",
      height: 60
    }
  }
});

export default CalculatorStack;

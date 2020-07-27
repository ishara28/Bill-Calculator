import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Header from "../shared/header";
import SavedBill from "../screens/savedBill";
import OneBillDetails from "../screens/oneBillDetails";

const screens = {
  SavedBills: {
    screen: SavedBill,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="𝐒𝐚𝐯𝐞𝐝 𝐁𝐢𝐥𝐥𝐬" />
        ),
      };
    },
  },
  OneBillDetails: {
    screen: OneBillDetails,
    navigationOptions: {
      title: "Bill Details",
      headerStyle: {
        backgroundColor: "#003366",
      },
    },
  },
};

const SavedBillsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#ddd",
    headerStyle: {
      backgroundColor: "#003366",
      height: 60,
    },
  },
});

export default SavedBillsStack;

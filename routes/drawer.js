import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import CalculatorStack from "./calculatorStack";
import React from "react";
// import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { Image, Dimensions } from "react-native";
import NoteStack from "./noteStack";
import CustomSidebarMenu from "../shared/customSidebarMenu";
import SavedBillsStack from "./savedBillsStack";
const rootDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        // drawerIcon: <Icon type="FontAwesome" name="home" color="#4d94ff" />
      },
    },
    SavedBills: {
      screen: SavedBillsStack,
    },

    Calculator: {
      screen: CalculatorStack,
      navigationOptions: {
        // drawerIcon: (
        //   <Icon type="FontAwesome" name="calculator" style={{ fontSize: 22 }} />
        // )
      },
    },
    Notes: {
      screen: NoteStack,
      navigationOptions: {
        // drawerIcon: <MaterialIcons name="people" size={28} />
      },
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        // drawerIcon: <MaterialIcons name="people" size={28} />
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    // drawerWidth: Dimensions.get("window").width - 125,
    drawerWidth: 275,
  }
);

export default createAppContainer(rootDrawNavigator);

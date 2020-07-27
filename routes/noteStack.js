import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Note from "../screens/note";
import React from "react";
import Header from "../shared/header";

const screens = {
  Notes: {
    screen: Note,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="𝐍𝐨𝐭𝐞𝐬" />
        ),
      };
    },
  },
};

const NoteStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#003366",
      height: 60,
    },
  },
});

export default NoteStack;

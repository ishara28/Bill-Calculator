import React from "react";
import { View } from "react-native";
import { Calculator } from "react-native-calculator";

export default class MyCalc extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Calculator
          style={{ flex: 1 }}
          calcButtonBackgroundColor="#003366"
          fontSize={30}
          displayHeight={120}
        />
      </View>
    );
  }
}

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AwesomeCard } from "react-native-awesome-card";
import { Icon } from "native-base";
// import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';

export class Total extends Component {
  render() {
    return (
      <View style={styles.card}>
        <LinearGradient
          style={{ padding: 15, margin: 15, borderRadius: 15 }}
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          tvParallaxTiltAngle={45}
        >
          <View>
            <Text style={{ fontSize: 26, fontWeight: "200", color: "#ddd" }}>
              Total : {this.props.total} /=
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Total;

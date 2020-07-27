import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class ItemHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>Item</Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.title}>Unit Price</Text>
        </View>
        <View style={styles.unit}>
          <Text style={styles.title}>Quantity</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.title}>Price</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
  },
  item: {
    flex: 2.8,
    borderWidth: 0.7,
    borderColor: "#ddd",
    // borderTopLeftRadius : 10,
    backgroundColor: "#0052cc",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    flex: 2.5,
    borderWidth: 0.7,
    borderColor: "#ddd",
    backgroundColor: "#0052cc",
    justifyContent: "center",
    alignItems: "center",
  },
  unit: {
    flex: 2.5,
    borderWidth: 0.7,
    borderColor: "#ddd",
    backgroundColor: "#0052cc",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    flex: 2.5,
    borderWidth: 0.7,
    borderColor: "#ddd",
    // borderTopEndRadius: 8,
    backgroundColor: "#0052cc",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddd",
  },
});

export default ItemHeader;

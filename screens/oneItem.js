import React, { Component } from "react";
import { View, Text } from "native-base";
import { Button, StyleSheet, ScrollView } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import uuid from "react-native-uuid";

export class OneItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: uuid.v1(),
      itemName: "",
      val1: 0,
      val2: 0,
      result: 0
    };
  }

  componentDidMount = () => {
    this.multiply(this.state.val1, this.state.val2);
  };

  multiply = (v1, v2) => {
    if (v1 == "" || v1 == "") {
      this.setState(
        {
          result: 0
        },
        () => this.callBack()
      );
    } else {
      this.setState(
        {
          result: parseFloat(v1) * parseFloat(v2)
        },
        () => this.callBack()
      );
    }
  };

  callBack = () => {
    this.props.getResult(this.state.itemId, this.state.result);
    this.props.getRow(
      this.state.itemId,
      this.state.itemName,
      this.state.val1,
      this.state.val2,
      this.state.result
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.item}>
            <TextInput
              style={styles.title}
              defaultValue="0"
              placeholder="Enter"
              value={this.state.itemName}
              onChangeText={text => this.setState({ itemName: text })}
            />
          </View>
          <View style={styles.quantity}>
            <TextInput
              style={styles.title}
              defaultValue="0"
              keyboardType={"numeric"}
              placeholder="Enter"
              value={this.state.val1}
              onChangeText={text =>
                this.setState({ val1: text }, () =>
                  this.multiply(this.state.val1, this.state.val2)
                )
              }
            />
          </View>
          <View style={styles.unit}>
            <TextInput
              style={styles.title}
              defaultValue="0"
              placeholder="Enter"
              keyboardType={"numeric"}
              value={this.state.val2}
              onChangeText={text =>
                this.setState({ val2: text }, () =>
                  this.multiply(this.state.val2, this.state.val1)
                )
              }
            />
          </View>
          <View style={styles.price}>
            <Text
              style={{
                ...styles.title,
                fontWeight: "bold",
                textAlign: "right"
              }}
            >
              {this.state.result}
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={() => this.callBack()}>
          <MaterialIcons name="add-circle" size={40} color="purple" />
        </TouchableOpacity> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 2.8
  },
  quantity: {
    flex: 2.5
  },
  unit: {
    flex: 2.5
  },
  price: {
    flex: 2.5
  },
  title: {
    fontSize: 18,
    padding: 8,
    textAlign: "center"
  }
});

export default OneItem;

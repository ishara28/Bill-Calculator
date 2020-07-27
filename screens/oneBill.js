import React, {Component} from 'react';
// import { Ionicons } from "@expo/vector-icons";
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
// import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export class OneBill extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{margin: 2, borderRadius: 6}}>
        <TouchableOpacity style={styles.container}>
          <TouchableOpacity
            style={{...styles.item, flexDirection: 'row'}}
            onPress={this.props.pressHandler}>
            <View style={{flex: 8}}>
              <ScrollView>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="FontAwesome"
                    name="user-circle"
                    style={{color: '#ddd', marginRight: 6}}
                  />
                  <Text style={styles.title}>{this.props.customerName}</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{flex: 3.5}}>
              <ScrollView>
                <Text style={{fontSize: 16, marginTop: 10}}>
                  {this.props.location}
                </Text>
              </ScrollView>
            </View>

            <TouchableOpacity
              style={{marginLeft: 10}}
              // onPress={() => this.props.handleDelete(this.props.note.id)}
              onPress={() => {
                Alert.alert(
                  'Delete Bill',
                  'Are You Sure To Delete This Bill?',
                  [
                    {
                      text: 'YES',
                      onPress: () => this.props.handleDelete(),
                    },
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                  ],
                  {cancelable: false},
                );
              }}>
              <Icon
                name="delete"
                type="MaterialIcons"
                style={{fontSize: 40, color: '#ff1a1a'}}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default OneBill;

const styles = StyleSheet.create({
  item: {
    // height: 55,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 21,
    color: 'white',
  },
});

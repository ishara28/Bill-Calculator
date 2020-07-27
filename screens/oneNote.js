import React, {Component} from 'react';
// import { Ionicons } from "@expo/vector-icons";
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
// import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export class OneNote extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{marginTop: 3, marginHorizontal: 4, borderRadius: 6}}>
        <TouchableOpacity style={styles.container}>
          <TouchableOpacity
            style={{...styles.item, flexDirection: 'row'}}
            onPress={this.props.pressHandler}>
            <View style={{flex: 5}}>
              <ScrollView>
                <Text style={styles.title}>{this.props.note.title}</Text>
              </ScrollView>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontSize: 14, marginTop: 10, color: '#ddd'}}>
                {this.props.note.date}
              </Text>
            </View>
            {/* <TouchableOpacity onPress={this.props.pressHandler}>
              <MaterialIcons name="edit" size={40} color="#ddd" />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{marginLeft: 10}}
              // onPress={() => this.props.handleDelete(this.props.note.id)}
              onPress={() => {
                Alert.alert(
                  'Delete Note',
                  'Are You Sure To Delete This Note?',
                  [
                    {
                      text: 'YES',
                      onPress: () =>
                        this.props.handleDelete(this.props.note.id),
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
              {/* <MaterialCommunityIcons name="delete" size={40} color="#ff1a1a" /> */}
              <Icon
                type="MaterialIcons"
                name="delete"
                style={{fontSize: 40, color: '#ff1a1a'}}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

export default OneNote;

const styles = StyleSheet.create({
  item: {
    // height: 40,
    // backgroundColor: "#4d94ff",
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    color: 'white',
  },
});

import React, {Component} from 'react';
import {
  View,
  Modal,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  AsyncStorage,
} from 'react-native';
// import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import {SafeAreaView} from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import OneNote from './oneNote';
import Toast, {DURATION} from 'react-native-easy-toast';
import {Dimensions} from 'react-native';
import {Textarea, Item, Input, Label, Button, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      modalVisible: false,
      id: '',
      title: '',
      noteText: '',
      showToast: false,
      notesFromDB: [],
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  // showToast = () => {
  //   setTimeout(
  //     () =>
  //       this.setState({
  //         showToast: true,
  //       }),
  //     500,
  //   ); // show toast after 2s

  //   setTimeout(
  //     () =>
  //       this.setState({
  //         showToast: false,
  //       }),
  //     5000,
  //   ); // hide toast after 5s
  // };

  setModalVisible(visible) {
    this.setState({modalVisible: visible, title: '', noteText: ''});
  }

  handleModalClick = () => {
    this.setModalVisible(!this.state.modalVisible);
    var found = this.state.notes.some(el => el.id == this.state.id);
    if (!found) {
      this.setState(
        {
          notes: [
            ...this.state.notes,
            {
              id: uuid.v1(),
              title: this.state.title,
              noteText: this.state.noteText,
              date:
                new Date().getFullYear().toString() +
                '/' +
                new Date().getMonth().toString() +
                '/' +
                new Date().getDate().toString(),
            },
          ],
        },
        this.setState(
          {
            id: '',
            title: '',
            noteText: '',
          },
          () => this.storeData(),
        ),
      );
    } else {
      let copied = [...this.state.notes];
      copied.find(x => x.id == this.state.id).title = this.state.title;
      copied.find(x => x.id == this.state.id).noteText = this.state.noteText;
      this.setState(
        {
          notes: copied,
        },
        () => {
          this.storeData();
          this.setState({
            id: '',
            title: '',
            noteText: '',
          });
        },
        // this.setState({
        //   id: '',
        //   title: '',
        //   noteText: '',
        // }),
      );
    }
  };

  handleDelete = id => {
    this.setState(
      state => {
        return {
          notes: this.state.notes.filter(function(item) {
            return item.id != id;
          }),
        };
      },
      () => {
        this.storeData();
        this.refs.toast.show('Note Deleted!', 1000);
      },
    );
  };

  getSavedNote = item => {
    this.setModalVisible(true);
    this.setState({
      id: item.id,
      title: item.title,
      noteText: item.noteText,
    });
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(this.state.notes));
    } catch (error) {
      // Error saving data
    }
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('notes');
      if (value !== null) {
        // We have data!!
        this.setState({
          notes: JSON.parse(value),
        });
        console.log(this.state.notesFromDB);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    let copied = [...this.state.notes];
    return (
      <LinearGradient
        colors={['#cce6ff', '#cce6ff', '#cce6ff']}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.upView}>
            <FlatList
              data={copied.reverse()}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <OneNote
                    note={item}
                    handleDelete={this.handleDelete}
                    pressHandler={() => this.getSavedNote(item)}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={note => note.id}
            />
            <View style={{marginTop: 22}}>
              <Modal
                style={{}}
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => this.setModalVisible(false)}>
                <View
                  style={{flex: 1, marginTop: 0, backgroundColor: '#cce6ff'}}>
                  <View>
                    <View
                      style={{
                        alignItems: 'flex-end',
                        marginRight: 10,
                        marginTop: 10,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.handleModalClick}>
                          <Icon
                            type="AntDesign"
                            name="checkcircle"
                            style={{fontSize: 60, color: '#003366'}}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => this.setModalVisible(false)}>
                          <Icon
                            type="AntDesign"
                            name="closecircle"
                            style={{fontSize: 60, color: 'red', marginLeft: 8}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Item floatingLabel>
                      <Label style={{marginLeft: 8}}>Title</Label>
                      <Input
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                        }}
                        onChangeText={text => {
                          this.setState({
                            title: text,
                          });
                        }}
                        value={this.state.title}
                        // maxLength={20}
                      />
                    </Item>

                    <View style={{marginTop: 20}}>
                      <Textarea
                        placeholder="Enter Note Here"
                        style={{height: 200}}
                        rowSpan={5}
                        onChangeText={text => {
                          this.setState({
                            noteText: text,
                          });
                        }}
                        value={this.state.noteText}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View style={{position: 'absolute', bottom: 0, margin: 10}}>
            <Text style={{fontSize: 16}}>{this.state.notes.length} Notes</Text>
          </View>
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <View>
                {/* <MaterialIcons name="note-add" size={80} color="#1f1f7a" /> */}
                <Icon
                  type="MaterialIcons"
                  name="note-add"
                  style={{fontSize: 80, color: '#1f1f7a'}}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Toast ref="toast" position="top" fadeOutDuration={1000} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  upView: {
    flex: 7,
  },
});
export default Note;

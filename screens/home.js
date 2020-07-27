import React, {Component} from 'react';
import {
  View,
  Button,
  Icon,
  Container,
  Header,
  Content,
  Text,
} from 'native-base';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import uuid from 'react-native-uuid';
// import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native-gesture-handler';
import OneItem from './oneItem';
import ItemHeader from './itemHeader';
import Total from './total';
import Dialog from 'react-native-dialog';
import {connect} from 'react-redux';
import {addBill} from '../redux/actions/bills';
import AwesomeButton from 'react-native-really-awesome-button';
import LinearGradient from 'react-native-linear-gradient';
import Toast, {DURATION} from 'react-native-easy-toast'

export class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result1: [],
      textInput: [<OneItem getResult={this.getResult} getRow={this.getRow} />],
      total: 0,
      rows: [],
      billOwnerDetails: [],
      dialogVisible: false,
      clearDialogVisible: false,
      customerId: '',
      customerName: '',
      phoneNumber: '',
      location: '',
      showToast: false,
      bills: [],
    };
  }

  componentDidMount() {
    this.retrieveData();
  }



  showDialog = () => {
    if (this.state.result1.length > 0 && this.state.result1[0].value != 0) {
      this.setState({dialogVisible: true});
    }
  };

  showClearDialog = () => {
    this.setState({clearDialogVisible: true});
  };

  handleCancel = () => {
    this.setState({
      dialogVisible: false,
      customerName: '',
      phoneNumber: '',
      location: '',
    });
  };

  handleClearCancel = () => {
    this.setState({
      clearDialogVisible: false,
    });
  };

  addTextInput = index => {
    if (this.state.textInput.length == 0) {
      let textInput = this.state.textInput;
      textInput.push(
        <OneItem getResult={this.getResult} getRow={this.getRow} />,
      );
      this.setState({textInput});
    } else if (this.state.result1[this.state.result1.length - 1].value != 0) {
      let textInput = this.state.textInput;
      textInput.push(
        <OneItem getResult={this.getResult} getRow={this.getRow} />,
      );
      this.setState({textInput});
    }
  };

  removeTextInput = () => {
    let textInput = this.state.textInput;
    textInput.pop();
    let result1 = this.state.result1;
    result1.pop();
    let rows = this.state.rows;
    rows.pop();
    this.setState({result1});
    this.setState({textInput});
    this.setState({rows});
  };

  getResult = (uuid, val) => {
    var found = this.state.result1.some(el => el.id == uuid);
    if (!found) {
      this.setState({
        result1: [...this.state.result1, {id: uuid, value: val}],
      });
    } else {
      let copied = [...this.state.result1];
      copied.find(x => x.id == uuid).value = val;
      this.setState({
        result1: copied,
      });
    }
  };

  getRow = (id, itemName, v1, v2, result) => {
    var found = this.state.result1.some(el => el.id == id);
    if (!found) {
      this.setState({
        rows: [
          ...this.state.rows,
          {id: id, itemName: itemName, v1: v1, v2: v2, result: result},
        ],
      });
    } else {
      let copied = [...this.state.rows];
      copied.find(x => x.id == id).itemName = itemName;
      copied.find(x => x.id == id).v1 = v1;
      copied.find(x => x.id == id).v2 = v2;
      copied.find(x => x.id == id).result = result;
      this.setState({
        rows: copied,
      });
    }
  };

  getTotal = () => {
    var tot = 0;
    this.state.result1.map(res => {
      tot = tot + res.value;
    });
    this.setState({
      total: tot,
    });
  };

  clearAll = () => {
    this.setState({
      result1: [],
      textInput: [],
      total: 0,
      clearDialogVisible: false,
    });
  };

  saveBill = () => {
    if (this.state.customerName != '') {
      this.setState(
        prevState => {
          return {
            ...prevState,
            bills: [
              ...prevState.bills,
              {
                id: uuid.v1(),
                value: [
                  {
                    customerId: uuid.v1(),
                    customerName: this.state.customerName,
                    phoneNumber: this.state.phoneNumber,
                    location: this.state.location,
                    total: this.state.total,
                    rows: this.state.rows,
                    date:
                      new Date().getFullYear().toString() +
                      '/' +
                      new Date().getMonth().toString() +
                      '/' +
                      new Date().getDate().toString(),
                  },
                ],
              },
            ],
            billOwnerDetails: [
              {
                customerId: uuid.v1(),
                customerName: this.state.customerName,
                phoneNumber: this.state.phoneNumber,
                location: this.state.location,
                total: this.state.total,
                rows: this.state.rows,
                date:
                  new Date().getFullYear().toString() +
                  '/' +
                  new Date().getMonth().toString() +
                  '/' +
                  new Date().getDate().toString(),
              },
            ],
          };
        },

        () => {
          this.props.addBill(this.state.billOwnerDetails);
          this.storeData();
          this.handleCancel();
        this.refs.toast.show('Bill Saved Successfully!', 1000);

          // this.clearAll();
          // this.setState({
          //   rows: [],
          // });
        },
      );
    }
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem('bills', JSON.stringify(this.state.bills));
    } catch (error) {
      // Error saving data
    }
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('bills');
      if (value !== null) {
        // We have data!!
        console.log('We have data');
        console.log(JSON.parse(value));
        this.setState(
          {
            bills: JSON.parse(value),
          },
          () => console.log(this.state.bills),
        );
      }
    } catch (error) {
      console.log(error);
      // Error retrieving data
    }
  };

  getAsyData = async () => {
    try {
      const value = await AsyncStorage.getItem('bills');
      if (value !== null) {
        console.log('state', JSON.parse(value));
        console.log('Props', this.props.billList);
      }
    } catch (error) {
      console.log(error);
      // Error retrieving data
    }
  };

  clearAsyStorage = async () => {
    try {
      await AsyncStorage.setItem('bills', JSON.stringify(''));
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <LinearGradient colors={['#cce6ff', '#cce6ff', '#cce6ff']}>
        <ScrollView>
          {/* <Text>{this.state.bills.length}</Text>
          <Button onPress={this.getAsyData}>
            <Text>Click</Text>
          </Button> */}
          <ItemHeader />
          <View style={{borderRadius: 8, backgroundColor: '#ddd'}}>
            {this.state.textInput.map(value => {
              return value;
            })}
          </View>

          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity onPress={() => this.removeTextInput()}>
              <Icon
                type="MaterialIcons"
                name="remove-circle"
                style={{fontSize: 55, color: '#0052cc'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addTextInput(this.state.textInput.length)}>
              <Icon
                type="MaterialIcons"
                name="add-circle"
                style={{fontSize: 55, color: '#0052cc'}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.btnsView}>
            <View style={styles.getTotal}>
              <AwesomeButton
                width="100%"
                backgroundColor="#003366"
                borderRadius={8}
                progress
                onPress={next => {
                  /** Do Something **/
                  this.getTotal();
                  next();
                }}>
                {/* <MaterialIcons name="add-box" size={30} color="white" /> */}
                <Icon
                  name="add-box"
                  type="MaterialIcons"
                  style={{fontSize: 30, color: 'white'}}
                />
                <Text style={{fontSize: 18, color: 'white'}}>TOTAL</Text>
              </AwesomeButton>
            </View>

            <View style={styles.save}>
              <AwesomeButton
                width="100%"
                backgroundColor="#003366"
                borderRadius={8}
                progress
                onPress={next => {
                  /** Do Something **/
                  this.showDialog();
                  this.getTotal();
                  next();
                }}>
                {/* <MaterialIcons name="save" size={30} color="white" /> */}
                <Icon
                  type="MaterialIcons"
                  name="save"
                  style={{fontSize: 30, color: 'white'}}
                />
                <Text style={{fontSize: 18, color: 'white'}}>SAVE</Text>
              </AwesomeButton>
            </View>
            <View style={styles.clear}>
              <AwesomeButton
                width="100%"
                backgroundColor="#c91d12"
                borderRadius={8}
                progress
                onPress={next => {
                  /** Do Something **/
                  this.showClearDialog();
                  next();
                }}>
                {/* <MaterialIcons name="delete" size={30} color="white" /> */}
                <Icon type="delete" style={{fontSize: 30, color: 'white'}} />
                <Text style={{fontSize: 18, color: 'white'}}>CLEAR</Text>
              </AwesomeButton>
            </View>
          </View>

          <Total total={this.state.total} />
          <View style={styles.emptyView} />

          {/* Dialog View to Save */}
          <View>
            <Dialog.Container visible={this.state.dialogVisible}>
              <Dialog.Title>SAVE BILL</Dialog.Title>
              <Dialog.Description>
                Do you want to save the bill. Then fill the details below!
              </Dialog.Description>
              <Dialog.Input
                value={this.state.customerName}
                placeholder="Customer Name"
                onChangeText={text => this.setState({customerName: text})}
              />
              <Dialog.Input
                value={this.state.phoneNumber}
                placeholder="Phone Number"
                keyboardType={'numeric'}
                onChangeText={text => this.setState({phoneNumber: text})}
              />
              <Dialog.Input
                value={this.state.location}
                placeholder="Location"
                onChangeText={text => this.setState({location: text})}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancel} />
              <Dialog.Button label="Save" onPress={this.saveBill} />
            </Dialog.Container>
          </View>

          {/* Dialog View to Clear */}
          <View>
            <Dialog.Container visible={this.state.clearDialogVisible}>
              <Dialog.Title>CLEAR?</Dialog.Title>
              <Dialog.Description>Do You Want To Clear?</Dialog.Description>

              <Dialog.Button label="Cancel" onPress={this.handleClearCancel} />
              <Dialog.Button label="Clear" onPress={this.clearAll} />
            </Dialog.Container>
          </View>
          <Toast ref="toast" position='top' fadeOutDuration={1000}  />
         
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  btnsView: {
    flex: 1,
    flexDirection: 'row',
  },
  getTotal: {
    flex: 1,
    margin: 1,
  },

  save: {
    flex: 1,
    margin: 1,
  },
  clear: {
    flex: 1,
    margin: 1,
  },

  emptyView: {
    height: 400,
  },
});

const mapStateToProps = state => {
  return {
    billList: state.billReducer.billList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBill: billDetails => dispatch(addBill(billDetails)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);

import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {deleteBill, setBills} from '../redux/actions/bills';
import Toast, {DURATION} from 'react-native-easy-toast'
import OneBill from './oneBill';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';

export class SavedBill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showToast: false,
      bills: [],
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

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
        this.setState(
          {
            bills: JSON.parse(value),
          },
          () => {
            this.props.setBills(this.state.bills);
            console.log('data', this.state.bills);
            console.log(this.props.bills);
          },
        );
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  deleteBill = id => {
    let newState;
    newState = this.state.bills.filter(x => x.id != id);
    this.setState(
      {
        bills: newState,
      },
      () => {
        this.storeData();
        this.refs.toast.show('Bill Deleted!', 1000);
      }
      
    );
  };

  get = () => {
    console.log('State', this.state.bills);
    console.log('Props', this.props.bills);
  };

  render() {
    let copied = [...this.props.bills];
    return (
      <LinearGradient
        style={{flex: 1}}
        colors={['#cce6ff', '#cce6ff', '#cce6ff']}>
        {/* <Button onPress={this.get}>
          <Text>Click</Text>
        </Button> */}
        <View style={{flex: 1}}>
          <View style={{flex: 15}}>
            <FlatList
              data={copied.reverse()}
              renderItem={({item}) => (
                <OneBill
                  customerName={item.value[0].customerName}
                  location={item.value[0].location}
                  total={item.value[0].total}
                  pressHandler={() =>
                    this.props.navigation.navigate('OneBillDetails', {
                      rows: item.value[0].rows,
                      customerName: item.value[0].customerName,
                      location: item.value[0].location,
                      phoneNumber: item.value[0].phoneNumber,
                      total: item.value[0].total,
                      date: item.value[0].date,
                    })
                  }
                  handleDelete={() => {
                    this.props.deleteBill(item.id);
                    this.deleteBill(item.id);
                  }}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 22,
                marginRight: 20,
                textAlign: 'right',
                color: 'black',
              }}>
              {this.props.bills.length} Saved Bills
            </Text>
          </View>
          <Toast ref="toast" position='top' fadeOutDuration={1000}  />
        
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    bills: state.billReducer.billList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBill: id => dispatch(deleteBill(id)),
    setBills: bills => dispatch(setBills(bills)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedBill);

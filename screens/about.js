import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as firebase from 'firebase';
import {
  Button,
  Accordion,
  Content,
  Separator,
  Right,
  Icon,
  Left,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import uuid from 'react-native-uuid';
import Toast, {DURATION} from 'react-native-easy-toast';
import * as OpenAnything from 'react-native-openanything';

export class about extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
    };
  }

  sendFeedback = () => {
    if (this.state.name != '' && this.state.message != '') {
      this.refs.toast.show('Feedback Sent!', 1000);
      this.setState({
        name: '',
        message: '',
      });

      // firebase
      //   .database()
      //   .ref("users/" + uuid.v1())
      //   .set({
      //     name: this.state.name,
      //     message: this.state.message,
      //   })
      //   .then(() => {
      //     console.log("Inserted!");
      //     this.setState({
      //       name: "",
      //       message: "",
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };
  render() {
    return (
      <LinearGradient
        style={{flex: 1}}
        colors={['#cce6ff', '#cce6ff', '#cce6ff']}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 4,
            }}>
            <Image
              source={require('./profile.png')}
              style={{width: 80, height: 80}}
            />
            <Text style={{fontSize: 16}}>Bill Calculator</Text>
            <Text style={{fontSize: 14}}>Version 1.0.1</Text>
            <Text style={{fontSize: 12}}>Powered By Codezone © </Text>
          </View>
          <View style={{flex: 3, marginTop: 20}}>
            <TouchableOpacity
              onPress={() =>
                OpenAnything.Web(
                  'https://play.google.com/store/apps/details?id=com.codezone.billcalculator',
                )
              }>
              <LinearGradient
                colors={['#b3b3ff', '#6666ff', '#1a1aff']}
                style={{
                  padding: 10,
                  // backgroundColor: "#ddd",
                  borderRadius: 10,
                  marginHorizontal: 10,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="star"
                    type="Octicons"
                    style={{marginHorizontal: 10}}
                  />
                  <Text style={{fontSize: 18}}>Rate & Review</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <Collapse>
              <CollapseHeader>
                <LinearGradient
                  colors={['#b3b3ff', '#6666ff', '#1a1aff']}
                  style={{
                    padding: 10,
                    backgroundColor: '#ddd',
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="mail"
                      type="Foundation"
                      style={{marginHorizontal: 10}}
                    />
                    <Text style={{fontSize: 18}}>Send Us!</Text>
                  </View>
                </LinearGradient>
              </CollapseHeader>
              <CollapseBody>
                <View
                  style={{
                    backgroundColor: '#ddd',
                    borderRadius: 10,
                    marginHorizontal: 20,
                  }}>
                  <Form>
                    <Item floatingLabel>
                      <Label>Name (Nickname)</Label>
                      <Input
                        value={this.state.name}
                        onChangeText={(name) => this.setState({name})}
                      />
                    </Item>
                    <Item floatingLabel last>
                      <Label>Message</Label>
                      <Input
                        style={{marginBottom: 20}}
                        value={this.state.message}
                        onChangeText={(message) => this.setState({message})}
                      />
                    </Item>
                  </Form>
                  <AwesomeButton
                    width="100%"
                    progress
                    onPress={(next) => {
                      /** Do Something **/
                      this.sendFeedback();
                      next();
                    }}>
                    SEND
                  </AwesomeButton>
                </View>
              </CollapseBody>
            </Collapse>
            <View style={{height: 450}} />
          </View>
          {/* Toast View */}
          <Toast ref="toast" position="center" fadeOutDuration={1000} />
        </ScrollView>
      </LinearGradient>
    );
  }
}

const firebaseConfig = {
  apiKey: 'AIzaSyA6xx4MCicPBspOLPflanpX56GWAXTpobw',
  authDomain: 'bill-calculator-46d8d.firebaseapp.com',
  databaseURL: 'https://bill-calculator-46d8d.firebaseio.com',
  projectId: 'bill-calculator-46d8d',
  storageBucket: 'bill-calculator-46d8d.appspot.com',
  messagingSenderId: '39977695026',
  appId: '1:39977695026:web:669ae4c05bef8d663bc92b',
  measurementId: 'G-XS98GNW57X',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default about;

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon, Footer} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import FlexImage from 'react-native-flex-image';

export default class CustomDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <LinearGradient colors={['#ddd', '#ddd', '#ddd']} style={{flex: 1}}>
        <ScrollView>
          <View style={{backgroundColor: '#003366'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.closeDrawer()}>
              <Icon
                name="menu-unfold"
                type="AntDesign"
                style={{marginLeft: 20, marginTop: 20, color: '#ddd'}}
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#003366',
              }}>
              <Text style={{fontSize: 30, marginBottom: 10, color: '#ddd'}}>
                𝕭𝖎𝖑𝖑 𝕮𝖆𝖑𝖈𝖚𝖑𝖆𝖙𝖔𝖗
              </Text>
              {/*Top Large Image */}
              <FlexImage
                source={require('../assets/icons/start2.png')}
                style={{width: 250, height: 100}}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.sideMenuContainer}>
              {/*Setting up Navigation Options from option array using loop*/}

              <View style={{width: '100%'}}>
                {/* Home Navigation  */}
                <TouchableOpacity
                  onPress={() => {
                    // global.currentScreenIndex = key;
                    this.props.navigation.navigate('Home');
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // backgroundColor: global.currentScreenIndex === key ? "" : "",
                  }}
                  // key={key}
                >
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 10, marginLeft: 20, flex: 1}}>
                      <Icon
                        type="AntDesign"
                        name={'home'}
                        style={{color: '#3f3f3f'}}
                        size={25}
                      />
                    </View>

                    <View style={{flex: 6}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '100',
                          color: '#3f3f3f',
                          // color:
                          //   global.currentScreenIndex === key ? "#ddd" : "#ddd",
                        }}>
                        {'Home'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Saved Bills Navigation  */}
                <TouchableOpacity
                  onPress={() => {
                    // global.currentScreenIndex = key;
                    this.props.navigation.navigate('SavedBills');
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // backgroundColor: global.currentScreenIndex === key ? "" : "",
                  }}
                  // key={key}
                >
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 10, marginLeft: 20, flex: 1}}>
                      <Icon
                        name={'database'}
                        type="Entypo"
                        style={{color: '#3f3f3f'}}
                        size={25}
                      />
                    </View>

                    <View style={{flex: 6}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '100',
                          color: '#3f3f3f',
                          // color:
                          //   global.currentScreenIndex === key ? "#ddd" : "#ddd",
                        }}>
                        {'Saved Bills'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* International Navigation  */}
                <TouchableOpacity
                  onPress={() => {
                    // global.currentScreenIndex = key;
                    this.props.navigation.navigate('Calculator');
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // backgroundColor: global.currentScreenIndex === key ? "" : "",
                  }}
                  // key={key}
                >
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 10, marginLeft: 20, flex: 1}}>
                      <Icon
                        name={'calculator'}
                        type="Entypo"
                        style={{color: '#3f3f3f'}}
                        size={25}
                      />
                    </View>

                    <View style={{flex: 6}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '100',
                          color: '#3f3f3f',
                          // color:
                          //   global.currentScreenIndex === key ? "#ddd" : "#ddd",
                        }}>
                        {'Calculator'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Notes Navigation  */}
                <TouchableOpacity
                  onPress={() => {
                    // global.currentScreenIndex = key;
                    this.props.navigation.navigate('Notes');
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // backgroundColor: global.currentScreenIndex === key ? "" : "",
                  }}
                  // key={key}
                >
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 10, marginLeft: 20, flex: 1}}>
                      <Icon
                        name={'pen-alt'}
                        type="FontAwesome5"
                        style={{color: '#3f3f3f'}}
                        size={25}
                      />
                    </View>

                    <View style={{flex: 6}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '100',
                          color: '#3f3f3f',
                          // color:
                          //   global.currentScreenIndex === key ? "#ddd" : "#ddd",
                        }}>
                        {'Notes'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* About Us Navigation  */}
                <TouchableOpacity
                  onPress={() => {
                    // global.currentScreenIndex = key;
                    this.props.navigation.navigate('About');
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // backgroundColor: global.currentScreenIndex === key ? "" : "",
                  }}
                  // key={key}
                >
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 10, marginLeft: 20, flex: 1}}>
                      <Icon
                        name="people"
                        type="SimpleLineIcons"
                        style={{color: '#3f3f3f'}}
                        size={25}
                      />
                    </View>

                    <View style={{flex: 6}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '100',
                          color: '#3f3f3f',
                          // color:
                          //   global.currentScreenIndex === key ? "#ddd" : "#ddd",
                        }}>
                        {'About Us'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* <View
                style={{ alignContent: "flex-start", alignItems: "flex-end" }}
              > */}
              <Text style={{color: 'grey', fontSize: 15, marginTop: 20}}>
                {/* Colombo Times Network (Pvt)Ltd. */}
              </Text>

              <Text style={{color: 'grey', fontSize: 13}}>Powered By</Text>
              <Text style={{color: 'grey', fontSize: 11}}>Codezone ©</Text>
              {/* </View> */}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 220,
    height: 200,
    borderRadius: 150 / 2,
    width: Dimensions.get('window').width - 150,
  },
});

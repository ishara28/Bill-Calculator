import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon type="FontAwesome" name="user-circle" />
                <Text>Customer</Text>
              </TabHeading>
            }>
            <LinearGradient
              style={{flex: 1}}
              colors={['#cce6ff', '#cce6ff', '#cce6ff']}>
              <ScrollView>
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={{
                    paddingLeft: 20,
                    margin: 20,
                    borderRadius: 10,
                    paddingBottom: 20,
                  }}>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 1}}>
                      <Icon
                        type="FontAwesome"
                        name="user-circle"
                        style={{marginRight: 10, color: '#ddd'}}
                      />
                    </View>
                    <View style={{flex: 6}}>
                      <Text style={{fontSize: 20, color: '#ddd'}}>
                        {this.props.navigation.getParam('customerName')}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 1}}>
                      <Icon
                        type="AntDesign"
                        name="mobile1"
                        style={{marginRight: 10, color: '#ddd'}}
                      />
                    </View>
                    <View style={{flex: 6}}>
                      <Text style={{fontSize: 20, color: '#ddd'}}>
                        {this.props.navigation.getParam('phoneNumber')}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 1}}>
                      <Icon
                        type="MaterialIcons"
                        name="location-on"
                        style={{marginRight: 10, color: '#ddd'}}
                      />
                    </View>
                    <View style={{flex: 6}}>
                      <Text style={{fontSize: 20, color: '#ddd'}}>
                        {this.props.navigation.getParam('location')}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 1}}>
                      <Icon
                        type="FontAwesome5"
                        name="cash-register"
                        style={{marginRight: 10, color: '#ddd'}}
                      />
                    </View>
                    <View style={{flex: 6}}>
                      <Text style={{fontSize: 20, color: '#ddd'}}>
                        Rs. {this.props.navigation.getParam('total')} /=
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 1}}>
                      <Icon
                        type="Octicons"
                        name="calendar"
                        style={{marginRight: 10, color: '#ddd'}}
                      />
                    </View>
                    <View style={{flex: 6}}>
                      <Text style={{fontSize: 20, color: '#ddd'}}>
                        {this.props.navigation.getParam('date')}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </ScrollView>
            </LinearGradient>
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon type="MaterialIcons" name="event-note" />
                <Text>Bill</Text>
              </TabHeading>
            }>
            {/* Tab of Bill Details */}
            <LinearGradient
              style={{flex: 1}}
              colors={['#cce6ff', '#cce6ff', '#cce6ff']}>
              <ScrollView style={{flex: 1}}>
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
                <FlatList
                  data={this.props.navigation.getParam('rows')}
                  renderItem={({item}) => (
                    <View style={styles.container2}>
                      <View style={styles.item2}>
                        {item.result != 0 ? (
                          <Text style={styles.title2}>{item.itemName}</Text>
                        ) : (
                          <Text />
                        )}
                      </View>
                      <View style={styles.quantity2}>
                        {item.result != 0 ? (
                          <Text style={styles.title2}>{item.v1}</Text>
                        ) : (
                          <Text />
                        )}
                      </View>
                      <View style={styles.unit2}>
                        {item.result != 0 ? (
                          <Text style={styles.title2}>{item.v2}</Text>
                        ) : (
                          <Text />
                        )}
                      </View>
                      <View style={styles.price2}>
                        {item.result != 0 ? (
                          <Text style={styles.title2}>{item.result}</Text>
                        ) : (
                          <Text />
                        )}
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </ScrollView>
            </LinearGradient>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    marginTop: 5,
  },
  item: {
    flex: 2.8,
    // borderRadius: 8,
    borderWidth: 0.7,
    borderColor: '#ddd',
    backgroundColor: '#0052cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    flex: 2.5,
    // borderRadius: 8,
    backgroundColor: '#0052cc',
    borderWidth: 0.7,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unit: {
    flex: 2.5,
    // borderRadius: 8,
    backgroundColor: '#0052cc',
    borderWidth: 0.7,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    flex: 2.5,
    // borderRadius: 8,
    backgroundColor: '#0052cc',
    borderWidth: 0.7,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ddd',
    marginTop: 5,
  },
  item2: {
    flex: 2.8,
    borderWidth: 0.7,
    borderColor: '#ddd',
  },
  quantity2: {
    flex: 2.5,
    borderWidth: 0.7,
    borderColor: '#ddd',
  },
  unit2: {
    flex: 2.5,
    borderWidth: 0.7,
    borderColor: '#ddd',
  },
  price2: {
    flex: 2.5,
    borderWidth: 0.7,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ddd',
  },

  title2: {
    fontSize: 18,
    padding: 8,
    textAlign: 'center',
  },
});

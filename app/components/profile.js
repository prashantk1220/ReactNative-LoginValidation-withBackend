import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity,
        TextInput, AsyncStorage } from 'react-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation'; 




export default class Profile extends React.Component {

  render(){
      return(
        <View style = {styles.container}>
          <Text 
            style = {styles.text}
            onPress = { () => this.props.navigation.navigate('Login')}> Welocme to Member area
          </Text>
        </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3'
    },
    text: {
        color: '#fff'
    }
})
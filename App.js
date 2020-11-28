import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  speak() {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
    console.log(thingToSay)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'#56A3BF'}
            centerComponent={{
              text: 'Text to Speech',
              style: { color: '#fff', fontSize: 28 },
            }}
          />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128//2016/06/11/779043_multimedia_512x512.png',
          }}
        />
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue = {"The"}
            placeholder = "Type your text here"
          />

        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.state.text === '' || this.state.text == ' '
          ? alert("Please type your text to hear the speech.")
          //rather than checking for the starting charcter, I am checking for the entire string using indexOf(). It returns -1 if the string is not there
          : (this.state.text.indexOf('@') !== -1
          || this.state.text.indexOf('#') !== -1
          || this.state.text.indexOf('$') !== -1
          || this.state.text.indexOf('%') !== -1
          || this.state.text.indexOf('^') !== -1
          || this.state.text.indexOf('&') !== -1
          || this.state.text.indexOf('*') !== -1
          || this.state.text.indexOf('(') !== -1
          || this.state.text.indexOf(')') !== -1
          || this.state.text.indexOf('<') !== -1
          || this.state.text.indexOf('>') !== -1
          || this.state.text.indexOf('~') !== -1
          || this.state.text.indexOf('`') !== -1
          || this.state.text.indexOf('[') !== -1
          || this.state.text.indexOf(']') !== -1
          || this.state.text.indexOf(';') !== -1
          || this.state.text.indexOf('{') !== -1
          || this.state.text.indexOf('}') !== -1
          //escape character for forward slash
          || this.state.text.indexOf('\\') !== -1
          || this.state.text.indexOf('|') !== -1
          || this.state.text.indexOf('_') !== -1
          || this.state.text.indexOf('£') !== -1
          || this.state.text.indexOf('₹') !== -1
          || this.state.text.indexOf('¥') !== -1
          || this.state.text.indexOf('€') !== -1
          ? alert("Please avoid using special characters.")
          : this.speak())
        }}>
          <Text style = {styles.displayText}>Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: '#566B73',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#2E5866'
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});

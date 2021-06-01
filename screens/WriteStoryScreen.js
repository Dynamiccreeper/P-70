import React from 'react';
import {createAppContainer} from 'react-navigation-tabs';
import {   Text,View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    constructor(){
    super();
    this.state = {
      text: '',
      chunks:[],
    };
  }

  render() {
  return (

<View>

    <Text>Read Story</Text>
            <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Text To Speech',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
                    var word =this.state.text.toLowerCase().trim();
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
                <TextInput
          style={styles.inputBox}
          onChangeText={text => {
                    var word =this.state.text.toLowerCase().trim();
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
                <TextInput
          style={styles.inputBox}
          onChangeText={text => {
                    var word =this.state.text.toLowerCase().trim();
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
               
               
               
                <TouchableOpacity
          style={styles.goButton}
          onPress={this.speak}
          >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
    </View>
  );
  }

}

const styles = StyleSheet.create({
 
  
});

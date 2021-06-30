import React from 'react';
import {createAppContainer} from 'react-navigation-tabs';
import {StyleSheet,Text,View,Image} from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppContainer/> 
    </View>
  );
  
}
const TabNavigator=createBottomTabNavigator({
  Read: {screen:ReadStoryScreen},
  Write: {screen: WriteStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='Read'){
        return(
          <Image source={require('./assets/read.png')}
          style={{width: 40, height: 40}}/>
        )
      }
      else if(routeName==='Write'){
        return(
          <Image source={require('./assets/write.png')}
          style={{width:40, height: 40}}/>
        )
      }
    }
  })
})

const AppContainer=createAppContainer(TabNavigator)



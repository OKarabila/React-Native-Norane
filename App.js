import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,Button,StyleSheet, Text, View,TextInput,Image ,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Admin from './screens/Admin'
import Home from './screens/admin/HomeScreen'
import Client from './screens/admin/Client'






const Stack = createNativeStackNavigator();

export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Admin" component={Admin} />
        <Stack.Screen options={{ headerShown: false}} name="Client" component={Client} />
        
        {/*<View style={styles.container}>
          <View style={styles.statusbar}>
            
          </View>
          
          <Image source={require('./img/logo.png')} style={styles.img} />
          <StatusBar style="auto" />
          <SafeAreaView>
          <TextInput
            style={styles.input}
            //onChangeText={onChangeText}
            placeholder="User Name"
            //value={text}
          />
          <TextInput
            style={styles.input}
            //onChangeText={onChangeNumber}
            //value={number}
            placeholder="Password"
            keyboardType="numeric"
          />
        </SafeAreaView>
        
        <Pressable style={styles.button} onPress={() => {    alert('You tapped the button!');  }}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.button1} onPress={() => {    alert('You tapped the button!');  }}>
          <Text style={styles.text1}>Signup</Text>
        </Pressable>
        </View>*/}
        
      </Stack.Navigator>
      
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'red',
    margin: 12,
    marginLeft: 30,
    marginRight: 30,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'white',
    margin: 12,
    borderColor: "red",
    borderWidth: 1,
    borderRadius:50,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#fff',
    height:30
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "red",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:50,
    justifyContent: "space-between",
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "red",
    width:300,
    height: 200,
    margin: 50,
    padding: 10,
  },

});

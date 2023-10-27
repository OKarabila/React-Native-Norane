import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, TouchableOpacity, View ,TextInput,Image} from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Tab = createMaterialTopTabNavigator();



const Tabs = () => {
  return(
    <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: { fontSize: 10 ,color:'white',},
            tabBarActiveTintColor: "#f5610a",
            tabBarInactiveTintColor: "#555",
            tabBarStyle: { backgroundColor: '#f40b62', },
        }}

    >
      <Tab.Screen name="Ajouter une commande" component={HomeScreen} options={{headerShown: false,
      }} />
      <Tab.Screen name="Commandes" component={FindScreen} options={{headerShown: false,
      }}/>
      <Tab.Screen name="Commandes Par Mois" component={PostScreen} options={{headerShown: false,
      }}/>
      <Tab.Screen name="Clients" component={SettingsScreen} options={{headerShown: false,
      }}/>

      
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#7F5DF0",
      shadowOffset: {
          width:0,
          height:10,
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation: 5,
  }
})

export default Tabs;
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, TouchableOpacity, View ,TextInput,Image} from 'react-native'
import HomeScreen from '../screens/admin/HomeScreen';
import FindScreen from '../screens/admin/FindScreen';
import ChatScreen from '../screens/admin/ChatScreen';
import PostScreen from '../screens/admin/PostScreen';
import SettingsScreen from '../screens/admin/SettingsScreen';


const Tab = createMaterialTopTabNavigator();



const Tabss = () => {
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
      <Tab.Screen name="Changer mot passe" component={SettingsScreen} options={{headerShown: false,
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

export default Tabss;
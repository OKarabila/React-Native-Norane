import React from 'react';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Tabs from '../../navigation/tabss';
import { StyleSheet, Text, TouchableOpacity, View ,TextInput , SafeAreaView, ScrollView,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Client = () => {

  const navigation = useNavigation()

  const handlelogin = () => {
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('password');
    AsyncStorage.removeItem('idclient');
    AsyncStorage.removeItem('nom');
    navigation.replace("Login");
  }


  return (
    <NavigationContainer independent={true}>
      <View >
        <View style={{height:80,backgroundColor:"white",width:"100%",marginTop:0}}>
            <Image //source={require("../../img/Noran23.png")} 
            style={styles.img} />
            <TouchableOpacity style={styles.button} onPress={handlelogin}>
                <Image //source={require("../../img/icon1.png")}
                 style={styles.img1} />
            </TouchableOpacity>
        </View>
      </View>
      <Tabs />
    </NavigationContainer>
    
  )
}

export default Client
  
const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        paddingLeft:25,
        paddingRight:25,
    },
    container1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    button:{
        backgroundColor:'#f40b62',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:25,
        marginRight:10,
        
        position:'absolute',
        position: 'absolute',
        right:0,
        top:0,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "red",
        width:100,
        height: 50,
        marginTop:20,
        padding: 10,
      },
      img1: {
        alignItems: 'center',
        justifyContent: 'center',
        width:20,
        height:22,
        
        padding: 10,
      },
      imgitems: {
        width:"100%",
        height:200,
        borderRadius:20,
        backgroundColor:"white",
      },
      items1:{
        position:'absolute',
        bottom:0,
        left:25,
  
        height:50,
        width:'50%',
        
        backgroundColor:"#f40b62",
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        alignItems:'center',
        justifyContent:'center',
      },
      items2:{
        position:'absolute',
        bottom:0,
        right:25,
        height:50,
        width:'50%',
        backgroundColor:"#f40b62",
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center',
        justifyContent:'center',
      },
      button1:{
        backgroundColor:'#f40b62',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginBottom:15,
    },
    buttonText1:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
  })
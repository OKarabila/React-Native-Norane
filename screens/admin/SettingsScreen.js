import { StatusBar } from 'expo-status-bar';
import { useColorScheme,Button,StyleSheet,SectionList, Text, TouchableOpacity, View ,TextInput , SafeAreaView, ScrollView,Image,RefreshControl,Modal, Pressable,Alert} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import { List } from 'react-native-paper';
import React, { useState , useEffect } from 'react'
import { mouseProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SettingsScreen = () => {


  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')
  const [Nom, setNom] =  useState('')
  const [text, setText] = useState('0');
  const [idclient, setidclient] = useState('') ;
  const [Client, setClient] =  useState('');
  const [telephone, settelephone] =  useState('');
  AsyncStorage.getItem('email').then((value)=>{setEmail(value)});
  AsyncStorage.getItem('password').then((value)=>{setPassword(value);});
  AsyncStorage.getItem('idclient').then((value1)=>{setidclient(value1);setClient(value1)});
  AsyncStorage.getItem('nom').then((value)=>{setNom(value)});
  AsyncStorage.getItem('telephone').then((value)=>{settelephone(value)});

  const [password1, setPassword1] =  useState('')
  const [password2, setPassword2] =  useState('')
  const [password3, setPassword3] =  useState('')
  const save = ()=>{
    if(password==password1 && password3==password2 && password3!='' && password2!=''){
      fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?id=eq."+idclient,{
          method:'PATCH',
          headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
          body:JSON.stringify({"password":password3})
      }).then(response => response.json())
      .then(data=> console.log(data))
      .catch(error => console.log(error))
      AsyncStorage.setItem('password',password3);
      setPassword1();
      setPassword2();
      setPassword3();  
  }else{
    if(password2=='' || password3=='' || password1==''){
      Alert.alert('Complites la formule!','', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }else{
      if(password1!=password){
        Alert.alert("L'ancien mot de passe ne correspond pas!",'', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        if(password2!=password3){
          Alert.alert('Le nouveau mot de passe ne correspond pas!','', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
      }else{
        if(password2!=password3){
          Alert.alert('Le nouveau mot de passe ne correspond pas!','', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
      }
    }
    
  } 
    
    

  }

  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  return (
    
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imgitems} >
            <Text style={{color:'#f40b62',fontSize:20,fontWeight:'700',marginTop:15}}>Changer Mot Pass</Text>
            <View style={{marginTop:15}}>
              <View  key="1">
                <Text>Mot de passe actuel</Text>
                <TextInput 
                  placeholder="" value={password1} onChangeText={text=> setPassword1(text)} secureTextEntry={hidePass1 ? true : false}
                  style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,width:'100%',marginTop:10,width:250,}}
                  />
                  <Icon style={styles.eye}
                    name={hidePass1 ? 'eye-slash' : 'eye'}
                    size={25}
                    color="#f40b62"
                    onPress={() => setHidePass1(!hidePass1)}
                    />
              </View>
            </View>
            <View style={{marginTop:15}}>
              <View  key="1">
                <Text>Nouveau mot de passe</Text>
                <TextInput 
                  placeholder="" value={password2} onChangeText={text=> setPassword2(text)} secureTextEntry={hidePass2 ? true : false}
                  style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,width:'100%',marginTop:10,width:250,}}
                  />
                  <Icon style={styles.eye}
                    name={hidePass2 ? 'eye-slash' : 'eye'}
                    size={25}
                    color="#f40b62"
                    onPress={() => setHidePass2(!hidePass2)}
                    />
              </View>
            </View>
            <View style={{marginTop:15}}>
              <View  key="1">
                <Text>Confirmez le mot de passe</Text>
                <TextInput 
                  placeholder="" value={password3} onChangeText={text=> setPassword3(text)} secureTextEntry={hidePass ? true : false}
                  style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,width:'100%',marginTop:10,width:250,}}
                  />
                  <Icon style={styles.eye}
                    name={hidePass ? 'eye-slash' : 'eye'}
                    size={25}
                    color="#f40b62"
                    onPress={() => setHidePass(!hidePass)}
                    />
              </View>
            </View>
            <View  style={styles.container2}>
              <TouchableOpacity style={styles.button6} onPress={save}>
                <Text style={styles.buttonText1}>Changer</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SettingsScreen
  

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
button6:{
  backgroundColor:'#f40b62',
    padding:12,
    width:250,
    borderRadius:10,
    alignItems:'center',
    marginTop:5,



},
button66:{
  backgroundColor:'#f40b62',
    padding:12,
    width:250,
    borderRadius:10,
    alignItems:'center',
    marginTop:5,
    marginRight:10,
    margin:5,

},

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  head: { height: 40,width:300, backgroundColor: '#f40b62',},
  text: { margin: 6,color:"black" },
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
      marginTop:5,
      marginRight:10,
      
      position:'absolute',

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
      
      alignItems: 'center',
      width:"100%",
      height:400,
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
  items22:{
    position:'absolute',
    bottom:210,
    right:5,
    height:70,
    width:'25%',
    
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  button1:{
    backgroundColor:'#f40b62',
    width:'52%',
    padding:5,
    borderRadius:10,
    alignItems:'center',
    marginBottom:15,
  },
  buttonText1:{
      color:'white',
      fontWeight:'700',
      fontSize:16,
  },
  items222:{
    position:'absolute',
    bottom:210,
    right:302,
    height:70,
    width:'25%',
    
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  button11:{
    backgroundColor:'#4CAF50',
    width:'52%',
    padding:5,
    borderRadius:10,
    alignItems:'center',
    marginBottom:15,
    
  },
  buttonText11:{
      color:'white',
      fontWeight:'700',
      fontSize:16,
  },
  eye: {
    marginLeft:215,
    marginTop:-35,
},
})

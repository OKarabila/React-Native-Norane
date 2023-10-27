import { useNavigation } from '@react-navigation/native'
import React, {useEffect,useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text,TextInput,  TouchableOpacity, View , YellowBox ,LogBox,Image,Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import PushNotification from "react-native-push-notification";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


const _postData1 = async () => {
  registerForPushNotificationsAsync = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    };
    registerForPushNotificationsAsync ();
}

let linkclient = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
let linkadmin = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/admin?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';

let adm=[];
let cli=[];

let m=1;
let l=1;
let o=1;

const LoginScreen = () => {
    const [email, setEmail] =  useState(null)
    const [password, setPassword] =  useState(null)
    const [nom, setNom] =  useState(null)
    const [idclient, setidclient] =  useState(null)
    const [admintoken, setadmintoken] =  useState(null)

    const navigation = useNavigation()

    if(nom==null && email==null && password==null){
        AsyncStorage.getItem('email').then((value)=>{setEmail(value)})
        AsyncStorage.getItem('password').then((value)=>{setPassword(value)})
        AsyncStorage.getItem('nom').then((value)=>{setNom(value)})
        AsyncStorage.getItem('idclient').then((value)=>{setidclient(value)})
    }

    if(nom=='admin'){
        navigation.replace("Admin");
    }else{
        if(nom!=null){
            navigation.replace("Client");
        }
    }
    
    React.useEffect(() => {
        fetch(linkclient).then((responses) => responses.json())
        .then((resJsons)=>{  
          cli=resJsons;
        }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          // ADD THIS THROW error
            throw error;
          });
    
        fetch(linkadmin).then((response) => response.json())
        .then((resJson)=>{
          adm=resJson;
        }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          // ADD THIS THROW error
            throw error;
          });
      })

    let sd=0;

    const handlelogin = () => {
        for (let userObject1 of adm){
              
            if(email==userObject1.email && password==userObject1.password){
                AsyncStorage.setItem('email',''+userObject1.email);
                AsyncStorage.setItem('password',''+userObject1.password);
                AsyncStorage.setItem('idclient',''+userObject1.idadmin);
                AsyncStorage.setItem('nom','admin');
                registerForPushNotificationsAsync = async () => {
                    if (Device.isDevice) {
                      const { status: existingStatus } = await Notifications.getPermissionsAsync();
                      let finalStatus = existingStatus;
                      if (existingStatus !== 'granted') {
                        const { status } = await Notifications.requestPermissionsAsync();
                        finalStatus = status;
                      }
                      if (finalStatus !== 'granted') {
                        alert('Failed to get push token for push notification!');
                        return;
                      }
                      const token = (await Notifications.getExpoPushTokenAsync()).data;
                      console.log(token);
                      setadmintoken(token);
                      fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/admin?idadmin=eq."+1,{
                        method:'PATCH',
                        headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
                        body:JSON.stringify({"token":token})
                        }).then(response => response.json())
                        .then(data=> console.log(data))
                        .catch(error => console.log(error))
                      this.setState({ expoPushToken: token });
                    } else {
                      alert('Must use physical device for Push Notifications');
                    }
                  
                    if (Platform.OS === 'android') {
                      Notifications.setNotificationChannelAsync('default', {
                        name: 'default',
                        importance: Notifications.AndroidImportance.MAX,
                        vibrationPattern: [0, 250, 250, 250],
                        lightColor: '#FF231F7C',
                      });
                    }
                };
                registerForPushNotificationsAsync ();
                navigation.replace("Admin");
                l=0;
                m=0;
                o=0;
                sd=1;
            }
        }
        
        for (let userObject of cli){     
            if(email==userObject.email && password==userObject.password){
                AsyncStorage.setItem('idclient',''+userObject.id);
                AsyncStorage.setItem('email',''+userObject.email);
                AsyncStorage.setItem('password',''+userObject.password);
                AsyncStorage.setItem('nom',''+userObject.Nom);
                AsyncStorage.setItem('telephone',''+userObject.Ntelephone);
                AsyncStorage.setItem('p1',''+userObject.p1);
                AsyncStorage.setItem('p2',''+userObject.p2);
                AsyncStorage.setItem('p3',''+userObject.p3);
                AsyncStorage.setItem('p4',''+userObject.p4);
                AsyncStorage.setItem('p5',''+userObject.p5);
                AsyncStorage.setItem('p6',''+userObject.p6);
                AsyncStorage.setItem('p7',''+userObject.p7);
                AsyncStorage.setItem('p8',''+userObject.p8);
                AsyncStorage.setItem('p9',''+userObject.p9);
                registerForPushNotificationsAsync = async () => {
                    if (Device.isDevice) {
                      const { status: existingStatus } = await Notifications.getPermissionsAsync();
                      let finalStatus = existingStatus;
                      if (existingStatus !== 'granted') {
                        const { status } = await Notifications.requestPermissionsAsync();
                        finalStatus = status;
                      }
                      if (finalStatus !== 'granted') {
                        alert('Failed to get push token for push notification!');
                        return;
                      }
                      const token = (await Notifications.getExpoPushTokenAsync()).data;
                      console.log(token);
                      setadmintoken(token);
                      fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?id=eq."+userObject.id,{
                        method:'PATCH',
                        headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
                        body:JSON.stringify({"token":token})
                        }).then(response => response.json())
                        .then(data=> console.log(data))
                        .catch(error => console.log(error))
                      this.setState({ expoPushToken: token });
                    } else {
                      alert('Must use physical device for Push Notifications');
                    }
                  
                    if (Platform.OS === 'android') {
                      Notifications.setNotificationChannelAsync('default', {
                        name: 'default',
                        importance: Notifications.AndroidImportance.MAX,
                        vibrationPattern: [0, 250, 250, 250],
                        lightColor: '#FF231F7C',
                      });
                    }
                };
                registerForPushNotificationsAsync ();
                navigation.replace("Client");
                m=0;
                l=0;
                o=0;
                sd=1;
            }
            
        }

        setTimeout(function(){
            if(email==null && password==null){
                Alert.alert('Complites la formule!','', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            }else{
                if(email!=null && password==null){
                    Alert.alert('Complites la formule!','', [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ]);
                }else{
                    if(email==null && password!=null){
                        Alert.alert('Complites la formule!','', [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }else{
                        if(email!=null && password!=null && sd==0){
                            Alert.alert('Complites la formule!','', [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ]);
                        } 
                    }
                }
            }
        },1000)
        
    }

    const [hidePass, setHidePass] = useState(true);
  

    return (
        <View style={styles.container} behavior="padding">
            <Image //source={require("../img/Noran23.png")} 
            style={styles.img} />
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="E-mail" 
                    value={email} onChangeText={text=> setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Mot de passe " 
                    value={password} onChangeText={text=> setPassword(text)}
                    style={styles.input}
                    secureTextEntry={hidePass ? true : false}
                />
                <Icon style={styles.eye}
                    name={hidePass ? 'eye-slash' : 'eye'}
                    size={25}
                    color="#f40b62"
                    onPress={() => setHidePass(!hidePass)}
                    />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlelogin}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-80,
        backgroundColor:"white",
    },
    inputContainer:{
        width: '80%',

    },

    input:{
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        borderColor:'#f40b62',
        borderWidth:2,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#f40b62',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#f40b62',
        borderWidth:2,
    },

    buttonOutlineText:{
        color:'#f40b62',
        fontWeight:'700',
        fontSize:16,
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
    eye: {
        marginLeft:"88%",
        marginTop:-40,
    },
})

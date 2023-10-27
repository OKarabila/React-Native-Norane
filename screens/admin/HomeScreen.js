import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity,Picker, View ,TextInput , SafeAreaView, ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';
import React, { useState , useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    const [Nom, setNom] =  useState('')
    const [text, setText] = useState('0');
    const [idclient, setidclient] = useState('') ;
    const [telephone, settelephone] =  useState('');
    const [CheesecakeOreo, setCheesecakeOreo] = useState('0') ;
    const [CheesecakeDaim, setCheesecakeDaim] =  useState('0');
    const [CheesecakeSpeculos, setCheesecakeSpeculos] =  useState('0');
    const [TiramisuOreo, setTiramisuOreo] =  useState('0');
    const [TiramisuDaim, setTiramisuDaim] =  useState('0');
    const [TiramisuSpeculos, setTiramisuSpeculos] =  useState('0');
    const [TiramisuFruitsRouges, setTiramisuFruitsRouges] =  useState('0');
    const [TiramisuOreoNutella, setTiramisuOreoNutella] =  useState('0');
    const [TiramisuSchokoBons, setTiramisuSchokoBons] =  useState('0');
    const [Client, setClient] =  useState('0');
    const [admintoken, setadmintoken] =  useState('0');


    AsyncStorage.getItem('email').then((value)=>{setEmail(value)});
    AsyncStorage.getItem('password').then((value)=>{setPassword(value);});
    AsyncStorage.getItem('idclient').then((value1)=>{setidclient(value1);setClient(value1)});
    AsyncStorage.getItem('nom').then((value)=>{setNom(value)});

    const _postData = async () => {

        let linkadmin = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/admin?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
        let datetime= new Date();

        if(CheesecakeOreo!='0' && Client!='0' || CheesecakeDaim!='0' && Client!='0' || CheesecakeSpeculos!='0'  && Client!='0' || TiramisuOreo!='0' && Client!='0' || TiramisuDaim!='0' && Client!='0' || TiramisuSpeculos!='0'  && Client!='0' || TiramisuFruitsRouges!='0'  && Client!='0' || TiramisuOreoNutella!='0' && Client!='0' || TiramisuSchokoBons!='0' && Client!='0'){
            fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders",{
                method:'POST',
                headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
                body:JSON.stringify({"idclient":Client,"q1":CheesecakeOreo,"q2":CheesecakeDaim,"q3":CheesecakeSpeculos,"q4":TiramisuOreo,"q5":TiramisuDaim,"q6":TiramisuSpeculos,"q7":TiramisuFruitsRouges,"q8":TiramisuOreoNutella,"q9":TiramisuSchokoBons,"datecommande":datetime})
            }).then(response => response.json())
            .then(data=> console.log(data))
            .catch(error => console.log(error))

            fetch(linkadmin).then((responses) => responses.json())
            .then((resJsons)=>{ 
                for(let user of resJsons){
                    fetch("https://exp.host/--/api/v2/push/send",{
                        method:'POST',
                        headers: {"Content-type": "application/json"},
                        body:JSON.stringify({                 
                            "to": ""+user.token,
                            "title": "Nouvelle commande ajoutée par le client",
        
                            "sound": "default",
                            "vibrate": true
                        })
                        }).then(response => response.json())
                        .then(data=> console.log(data))
                        .catch(error => console.log(error))
                }
            }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
                throw error;
            });
            
            setCheesecakeOreo('0');
            setCheesecakeDaim('0');
            setCheesecakeSpeculos('0');
            setTiramisuOreo('0');
            setTiramisuDaim('0');
            setTiramisuSpeculos('0');
            setTiramisuFruitsRouges('0');
            setTiramisuOreoNutella('0');
            setTiramisuSchokoBons('0');
            
        }
        
    
    }

  return (
    
    <View>
        <SafeAreaView style={{marginBottom:0,}}>
            <ScrollView>
                <View style={styles.container} key={1}>
                    <Image //source={require("../../img/Cheese-cake-Oreo.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Cheese cake Oreo</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" 
                        value={CheesecakeOreo} onChangeText={text=> setCheesecakeOreo(text)} keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={2}>
                    <Image //source={require("../../img/Cheese-cake-Daim.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Cheese cake Daim</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={CheesecakeDaim} onChangeText={text=> setCheesecakeDaim(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={3}>
                    <Image //source={require("../../img/Cheese-cake-Spéculos.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Cheese cake Spéculos</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={CheesecakeSpeculos} onChangeText={text=> setCheesecakeSpeculos(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={4}>
                    <Image //source={require("../../img/tiramisu-oreo.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Tiramisu Oreo</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={TiramisuOreo} onChangeText={text=> setTiramisuOreo(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={5}>
                    <Image //source={require("../../img/tiramisu-daim.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Tiramisu Daim</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={TiramisuDaim} onChangeText={text=> setTiramisuDaim(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={6}>
                    <Image //source={require("../../img/tiramisu-caramel-speculos.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Tiramisu Speculos</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={TiramisuSpeculos} onChangeText={text=> setTiramisuSpeculos(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={7}>
                    <Image //source={require("../../img/Tiramisu-Fruits-Rouges.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Tiramisu Fruits Rouges</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={TiramisuFruitsRouges} onChangeText={text=> setTiramisuFruitsRouges(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={8}>
                    <Image //source={require("../../img/Tiramisu-oreo-nutella.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Tiramisu Oreo Nutella</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={TiramisuOreoNutella} onChangeText={text=> setTiramisuOreoNutella(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={9}>
                    <Image //source={require("../../img/Tiramisu-Schoko-Bons.jpg")}
                    resizeMode="cover"
                    style={styles.imgitems} />
                    <View style={styles.items1}>
                        <Text style={{color:'white'}}>Tiramisu Schoko Bons</Text>
                    </View>
                    <View style={styles.items2}>
                        <TextInput 
                        placeholder="Quantité" value={TiramisuSchokoBons} onChangeText={text=> setTiramisuSchokoBons(text)}
                        keyboardType="numeric"
                        style={{borderColor:'white',color:'white',borderWidth:2,borderRadius:10,padding:5,paddingLeft:15,paddingRight:15,}}
                        />
                    </View>
                </View>
                <View style={styles.container} key={10}>
                    <TouchableOpacity style={styles.button1} onPress={_postData}>
                        <Text style={styles.buttonText1}>Ajouter une commande </Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>

    </View>
    
    )
}

export default HomeScreen
  

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
      marginTop:5,
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

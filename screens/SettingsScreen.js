
import { useColorScheme,Button,StyleSheet, Text, TouchableOpacity, View ,TextInput , SafeAreaView, ScrollView,Image,RefreshControl,Modal, Pressable,Alert } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import React, { useState , useEffect } from 'react'
import { mouseProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyModal from '../components/MyModal';




const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

let item=[];
let item11=[];
let item22=[];
let items=[];
let client=[];
let f=1;
let i=0;
let k=0;
let nom="";
let n="";
let qq1=0;
let t=0;
let link = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
let linkclient = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';


let clie=[];
let ord=[];
let pd=[];


const SettingsScreen = () => {
  React.useEffect(() => {
    fetch(linkclient).then((responses) => responses.json())
    .then((resJsons)=>{  
      clie=resJsons;
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
        throw error;
      });

    fetch(link).then((response) => response.json())
    .then((resJson)=>{
      ord=resJson;
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
        throw error;
      });
  })


  const modalContainerStyle = {
    flex: 1,
    justifyContent: 'flex-end',
  
  };
  const modalStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    alignItems: 'center',
    margin: 5,
    height:655,
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  };
  const titleStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  };
  const optionTextStyle = {
    fontSize: 18,
    fontWeight: '500',
    color: isDarkMode ? 'white' : 'black',
    marginTop:8,
  };
  const optionTextStyle1 = {
    fontSize: 18,
    fontWeight: '500',
    color: isDarkMode ? 'white' : 'black',
    marginTop:8,
  };
  const optionContainer = {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  };

  setInterval(function(){
    item22=[];
    item11=[];
    for (let userObject1 of clie) {
      item11=[userObject1.id,userObject1.Nom,userObject1.Adress,userObject1.Ntelephone,userObject1.email,userObject1.password,userObject1.p1,userObject1.p2,userObject1.p3,userObject1.p4,userObject1.p5,userObject1.p6,userObject1.p7,userObject1.p8,userObject1.p9,userObject1.nombrefacture];
      item22.push(item11);
      k++;
    }
  },1000);

  const [text, setText] = useState('0');
  const [idclient, setidclient] = useState('') ;
  const [nomclient, setnomclient] = useState('') ;
  const [adress, setadress] =  useState('');
  const [telephone, settelephone] =  useState('');
  const [email, setemail] =  useState('');
  const [p1, setp1] =  useState('');
  const [p2, setp2] =  useState('');
  const [p3, setp3] =  useState('');
  const [p4, setp4] =  useState('');
  const [p5, setp5] =  useState('');
  const [p6, setp6] =  useState('');
  const [p7, setp7] =  useState('');
  const [p8, setp8] =  useState('');
  const [p9, setp9] =  useState('');
  const [motpass, setmotpass] =  useState('');



  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    
    
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const backgroundStyle = {
    flex: 1,

    backgroundColor: isModalOpen
      ? isDarkMode
        ? '#ffffff30'
        : 'gray'
      : isDarkMode
      ? '#000'
      : '#F5F5F5',
  };
  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  };

  const ItemView = (key,f,nom) => {
    
    return (
      <View style={styles.container} key={clie[f].id}>
        <View style={styles.imgitems} >
            <Text style={{color:'#f40b62',fontSize:15,fontWeight:'700',marginTop:10,marginLeft:15}}>Nom Client : {clie[f].Nom}</Text>
            <Text style={{color:'#f40b62',fontSize:15,fontWeight:'700',marginTop:10,marginLeft:15}}>Adress : {clie[f].Adress}</Text>
            <Text style={{color:'#f40b62',fontSize:15,fontWeight:'700',marginTop:10,marginLeft:15}}>Telephone : {clie[f].Ntelephone}</Text>
            <Text style={{color:'#f40b62',fontSize:15,fontWeight:'700',marginTop:10,marginLeft:15}}>E-mail : {clie[f].email}</Text> 
          <View style={{marginTop:15,alignItems: 'center'}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#f40b62',position:'absolute',}}>
              <Row data={['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9']} style={styles.head} textStyle={{color:'white',marginLeft:8,}}/>
              <Rows data={[[ ' '+clie[f].p1, ' '+clie[f].p2,' '+clie[f].p3, ' '+clie[f].p4, ' '+clie[f].p5,' '+clie[f].p6,' '+clie[f].p7,' '+clie[f].p8,' '+clie[f].p9]]} textStyle={styles.text} style={{}}/>
            </Table>
          </View>
          
        </View>
 
        <View style={styles.items22}>
            <TouchableOpacity style={styles.button1} onPress={() => {Modelform(clie[f].id)}}>
                <Text style={styles.buttonText1}><Icon name="edit" size={25} color="white" /></Text>
            </TouchableOpacity>
          </View>
      </View>
      
    );

  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const Modelform = (id)=>{
    setModalVisible(true);
    for(let user of clie){
      if(user.id==id){
        setidclient(id);
        setnomclient(user.Nom);
        setadress(user.Adress);
        settelephone(user.Ntelephone);
        setemail(user.email);
        setmotpass(user.password);
        setp1(""+user.p1);
        setp2(""+user.p2);
        setp3(""+user.p3);
        setp4(""+user.p4);
        setp5(""+user.p5);
        setp6(""+user.p6);
        setp7(""+user.p7);
        setp8(""+user.p8);
        setp9(""+user.p9);

      }
    }
    
  }

  const Modelform1 = ()=>{
    setidclient("");
    setnomclient("");
    setadress("");
    settelephone("");
    setemail("");
    setmotpass("");
    setp1("");
    setp2("");
    setp3("");
    setp4("");
    setp5("");
    setp6("");
    setp7("");
    setp8("");
    setp9("");
    setModalVisible1(true);
    
    
  }
  const save = ()=>{
    if(idclient!='' && nomclient!='' && adress!='' && telephone!='' && email!=''  && motpass!='' && p1!='' && p2!='' && p3!='' && p4!='' && p5!='' && p6!='' && p7!='' && p8!='' && p9!=''){
      fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?id=eq."+idclient,{
          method:'PATCH',
          headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
          body:JSON.stringify({"Nom":nomclient,"Adress":adress,"Ntelephone":telephone,"email":email,"password":motpass,"p1":p1,"p2":p2,"p3":p3,"p4":p4,"p5":p5,"p6":p6,"p7":p7,"p8":p8,"p9":p9})
      }).then(response => response.json())
      .then(data=> console.log(data))
      .catch(error => console.log(error))
      setTimeout(function (){
        setidclient("");
        setnomclient("");
        setadress("");
        settelephone("");
        setemail("");
        setmotpass("");
        setp1("");
        setp2("");
        setp3("");
        setp4("");
        setp5("");
        setp6("");
        setp7("");
        setp8("");
        setp9("");
        onRefresh();
        setModalVisible(false);
      },1000);
      
  }
    

  }
  const save1 = ()=>{
    if(nomclient!='' && adress!='' && telephone!='' && email!=''  && motpass!='' && p1!='' && p2!='' && p3!='' && p4!='' && p5!='' && p6!='' && p7!='' && p8!='' && p9!=''){
      fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client",{
          method:'POST',
          headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
          body:JSON.stringify({"Nom":nomclient,"Adress":adress,"Ntelephone":telephone,"email":email,"password":motpass,"p1":p1,"p2":p2,"p3":p3,"p4":p4,"p5":p5,"p6":p6,"p7":p7,"p8":p8,"p9":p9})
      }).then(response => response.json())
      .then(data=> console.log(data))
      .catch(error => console.log(error))
      setTimeout(function (){
        setidclient("");
        setnomclient("");
        setadress("");
        settelephone("");
        setemail("");
        setmotpass("");
        setp1("");
        setp2("");
        setp3("");
        setp4("");
        setp5("");
        setp6("");
        setp7("");
        setp8("");
        setp9("");
        onRefresh();
        setModalVisible1(false);
      },1000);
      
  }
    

  }

  const annuler = ()=>{
    setidclient("");
    setnomclient("");
    setadress("");
    settelephone("");
    setemail("");
    setmotpass("");
    setp1("");
    setp2("");
    setp3("");
    setp4("");
    setp5("");
    setp6("");
    setp7("");
    setp8("");
    setp9("");
    setModalVisible(false);
  }
  const annuler1 = ()=>{
    setidclient("");
    setnomclient("");
    setadress("");
    settelephone("");
    setemail("");
    setmotpass("");
    setp1("");
    setp2("");
    setp3("");
    setp4("");
    setp5("");
    setp6("");
    setp7("");
    setp8("");
    setp9("");
    setModalVisible1(false);
  }
  
  if(t==0){
    t=1;
    setTimeout(function(){
      onRefresh();
    },1000)
    
  }



  return (
    <View style={backgroundStyle}>
        <SafeAreaView style={{marginBottom:0,}}>
            <ScrollView refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }>
              {clie.map(ItemView,f,nom)}

              
              <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button1} onPress={Modelform1}
                    >
                        <Text style={styles.buttonText1}>Ajouter un client</Text>
                </TouchableOpacity>


              </View>
            </ScrollView>
        </SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modale a été fermé.");
            setModalVisible(!modalVisible);
            setidclient("");
            setnomclient("");
            setadress("");
            settelephone("");
            setemail("");
            setmotpass("");
            setp1("");
            setp2("");
            setp3("");
            setp4("");
            setp5("");
            setp6("");
            setp7("");
            setp8("");
            setp9("");
          }}
        >
          <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text style={titleStyle}>Modifier le client</Text>
            <SafeAreaView style={{marginBottom:0,marginTop:15}}>
              <ScrollView>
                <View style={optionContainer} key="1">
                  <Text style={optionTextStyle}>Nom Client</Text>
                  <TextInput 
                     value={nomclient} onChangeText={text=> setnomclient(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="2">
                  <Text style={optionTextStyle}>Adress</Text>
                  <TextInput 
                    value={adress} onChangeText={text=> setadress(text)} 
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="3">
                  <Text style={optionTextStyle}>Telephone</Text>
                  <TextInput 
                    value={telephone} onChangeText={text=> settelephone(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="4">
                  <Text style={optionTextStyle}>E-mail</Text>
                  <TextInput 
                    value={email} onChangeText={text=> setemail(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="5">
                  <Text style={optionTextStyle}>Mot de passe</Text>
                  <TextInput 
                    value={motpass} onChangeText={text=> setmotpass(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="6">
                  <Text style={optionTextStyle1}>P1</Text>
                  <TextInput 
                    value={p1} onChangeText={text=> setp1(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P2</Text>
                  <TextInput 
                    value={p2} onChangeText={text=> setp2(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P3</Text>
                  <TextInput 
                    value={p3} onChangeText={text=> setp3(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                </View>
                <View style={optionContainer} key="7">
                  <Text style={optionTextStyle1}>P4</Text>
                  <TextInput 
                    value={p4} onChangeText={text=> setp4(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P5</Text>
                  <TextInput 
                    value={p5} onChangeText={text=> setp5(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P6</Text>
                  <TextInput 
                    value={p6} onChangeText={text=> setp6(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                </View>
                <View style={optionContainer} key="8">
                  <Text style={optionTextStyle1}>P7</Text>
                  <TextInput 
                    value={p7} onChangeText={text=> setp7(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P8</Text>
                  <TextInput 
                    value={p8} onChangeText={text=> setp8(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P9</Text>
                  <TextInput 
                    value={p9} onChangeText={text=> setp9(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                </View>
                

                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={save}
                        >
                            <Text style={styles.buttonText1}>Modifier</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={annuler}
                        >
                            <Text style={styles.buttonText1}>Annuler</Text>
                    </TouchableOpacity>


                </View>  
              </ScrollView>
            </SafeAreaView>
          </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modale a été fermé.");
            setModalVisible1(!modalVisible1);
            setidclient("");
            setnomclient("");
            setadress("");
            settelephone("");
            setemail("");
            setmotpass("");
            setp1("");
            setp2("");
            setp3("");
            setp4("");
            setp5("");
            setp6("");
            setp7("");
            setp8("");
            setp9("");
          }}
        >
          <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text style={titleStyle}>Ajouter un client</Text>
            <SafeAreaView style={{marginBottom:0,marginTop:15}}>
              <ScrollView>
                <View style={optionContainer} key="1">
                  <Text style={optionTextStyle}>Nom Client</Text>
                  <TextInput 
                     value={nomclient} onChangeText={text=> setnomclient(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="2">
                  <Text style={optionTextStyle}>Adress</Text>
                  <TextInput 
                    value={adress} onChangeText={text=> setadress(text)} 
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="3">
                  <Text style={optionTextStyle}>Telephone</Text>
                  <TextInput 
                    value={telephone} onChangeText={text=> settelephone(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="4">
                  <Text style={optionTextStyle}>E-mail</Text>
                  <TextInput 
                    value={email} onChangeText={text=> setemail(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="5">
                  <Text style={optionTextStyle}>Mot de passe</Text>
                  <TextInput 
                    value={motpass} onChangeText={text=> setmotpass(text)}
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:200}}
                    />
                </View>
                <View style={optionContainer} key="6">
                  <Text style={optionTextStyle1}>P1</Text>
                  <TextInput 
                    value={p1} onChangeText={text=> setp1(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P2</Text>
                  <TextInput 
                    value={p2} onChangeText={text=> setp2(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P3</Text>
                  <TextInput 
                    value={p3} onChangeText={text=> setp3(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                </View>
                <View style={optionContainer} key="7">
                  <Text style={optionTextStyle1}>P4</Text>
                  <TextInput 
                    value={p4} onChangeText={text=> setp4(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P5</Text>
                  <TextInput 
                    value={p5} onChangeText={text=> setp5(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P6</Text>
                  <TextInput 
                    value={p6} onChangeText={text=> setp6(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                </View>
                <View style={optionContainer} key="8">
                  <Text style={optionTextStyle1}>P7</Text>
                  <TextInput 
                    value={p7} onChangeText={text=> setp7(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P8</Text>
                  <TextInput 
                    value={p8} onChangeText={text=> setp8(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                  <Text style={optionTextStyle1}>P9</Text>
                  <TextInput 
                    value={p9} onChangeText={text=> setp9(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,width:60}}
                    />
                </View>
                

                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={save1}
                        >
                            <Text style={styles.buttonText1}>Ajouter</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={annuler1}
                        >
                            <Text style={styles.buttonText1}>Annuler</Text>
                    </TouchableOpacity>


                </View>  
              </ScrollView>
            </SafeAreaView>
          </View>
          </View>
        </Modal>
    </View>
    
)
}

export default SettingsScreen
  

const styles = StyleSheet.create({

  head: { height: 20,width:300, backgroundColor: '#f40b62',},
  text: { height: 20,width:300,color:"black" },
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
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
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
  button6:{
    backgroundColor:'#f40b62',
    padding:12,
    width:250,
    borderRadius:10,
    alignItems:'center',
    marginTop:5,
    marginRight:10,


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
    items22:{
      position:'absolute',
      bottom:140,
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

})

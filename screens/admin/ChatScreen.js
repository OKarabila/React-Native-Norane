import { StatusBar } from 'expo-status-bar';
import { useColorScheme,Button,StyleSheet, Text, TouchableOpacity, View ,TextInput , SafeAreaView, ScrollView,Image,RefreshControl,Modal, Pressable,Alert } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import React, { useState , useEffect } from 'react'
import { mouseProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Icon from 'react-native-vector-icons/FontAwesome';






const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

let kl=[];
let item5=[];
let item6=[];
let item7=[];
let item8=[];

let f1=1;
let i=0;
let k=0;
let j=0;
let m1=0;
let nom1="";
let n=0;
let qq11=0;
let qq2=0;
let date1=0;
let day1=0;
let month1=0;
let year1=0;
let link1 = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
let linkclient1 = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';


day1= new Date().getDate();
month1= new Date().getMonth()+1;
year1= new Date().getFullYear();
if(month1=='1' || month1=='2' || month1=='3' || month1=='4' || month1=='5' || month1=='6' || month1=='7' || month1=='8' || month1=='9'){
  if(day1=='1' || day1=='2' || day1=='3' || day1=='4' || day1=='5' || day1=='6' || day1=='7' || day1=='8' || day1=='9'){
    date1=year1+'-0'+month1+'-0'+day1;
  }else{
    date1=year1+'-0'+month1+'-'+day1;
  }
}else{
  if(month1=='10' || month1=='11' || month1=='12'){
    if(day1=='1' || day1=='2' || day1=='3' || day1=='4' || day1=='5' || day1=='6' || day1=='7' || day1=='8' || day1=='9'){
      date1=year1+'-'+month1+'-0'+day1;
    }else{
      date1=year1+'-'+month1+'-'+day1;
    }
  }
}


setInterval(function (){
  
  fetch(linkclient1).then((responses) => responses.json())
  .then((resJsons)=>{   
      for (let userObject1 of resJsons) {
          item6=[userObject1.id,userObject1.Nom];
          item7.push(item6);
          
      }
  });

  fetch(link1).then((response) => response.json())
  .then((resJson)=>{
    kl=resJson;
      
  });

}, 1000);
  
  

 

const FindScreen = () => {
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
  };
  const optionContainer = {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  };

  

  const [text, setText] = useState('0');
  const [idorder, setidorder] = useState('') ;
  const [idclient, setidclient] = useState('') ;
  const [CheesecakeOreo, setCheesecakeOreo] = useState('') ;
  const [CheesecakeDaim, setCheesecakeDaim] =  useState('');
  const [CheesecakeSpeculos, setCheesecakeSpeculos] =  useState('');
  const [TiramisuOreo, setTiramisuOreo] =  useState('');
  const [TiramisuDaim, setTiramisuDaim] =  useState('');
  const [TiramisuSpeculos, setTiramisuSpeculos] =  useState('');
  const [TiramisuFruitsRouges, setTiramisuFruitsRouges] =  useState('');
  const [TiramisuOreoNutella, setTiramisuOreoNutella] =  useState('');
  const [TiramisuSchokoBons, setTiramisuSchokoBons] =  useState('');
  const [Client, setClient] =  useState('');
  const [datecommande, setdatecommande] =  useState('');
  const [v, setv] =  useState('0');

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
  const [modalVisible, setModalVisible] = useState(false);

  const ItemView = (key,f1,nom1) => {
    {i=kl[f1].idclient-1;}
    {if(kl[f1].datecommande==date1 && kl[f1].v==0){
      {k=1}
      return (
      
        <View style={styles.container} key={kl[f1].idorder}>
          <View style={styles.imgitems} >
              <Text style={{color:'#f40b62',fontSize:20,fontWeight:'700',marginTop:15}}>Nom Client : {item7[i][1]}</Text>
            <View style={{marginTop:15}}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#f40b62',position:'absolute',}}>
                <Row data={['TO', 'TD', 'TS', 'TFR', 'TON', 'TSB']} style={styles.head} textStyle={{color:'white',marginLeft:15,}}/>
                <Rows data={[['   '+kl[f1].q4, '   '+kl[f1].q5, '   '+kl[f1].q6, '   '+kl[f1].q7, '   '+kl[f1].q8, '   '+kl[f1].q9]]} textStyle={styles.text} style={{}}/>
              </Table>
              <Table borderStyle={{borderWidth: 2, borderColor: '#f40b62',position:'absolute',}}>
                <Row data={['       CO', '       CD', '       CS']} style={styles.head} textStyle={{color:'white',marginLeft:15,}}/>
                <Rows data={[['          '+kl[f1].q1, '          '+kl[f1].q2, '          '+kl[f1].q3]]} textStyle={styles.text} style={{}}/>
              </Table>
            </View>
            
          </View>
          <View style={styles.items1}>
              <Text style={{color:'white',fontSize:15}}>Date de Commande</Text>
          </View>
          <View style={styles.items2}>
            <Text style={{color:'white',fontSize:15}}>{kl[f1].datecommande}</Text>
          </View>
          <View style={styles.items22}>
            <TouchableOpacity style={styles.button1} onPress={() => {Modelform(kl[f1].idorder)}}>
                <Text style={styles.buttonText1}><Icon name="edit" size={25} color="white" /></Text>
            </TouchableOpacity>
          </View>
        </View>
        
      );
      
    }else{
      let g=f1+1;
      if(k==0 && kl.length==g){
        return (
          <View style={styles.container}>
            <View style={styles.imgitems1} >
            <Text style={{color:'#f40b62',fontSize:15,fontWeight:'700',marginTop:10,marginLeft:15}}>Pas des commandes aujourd'hui</Text>
          
          </View>
          </View>
          );
      }
    }
  }

  };
  function a(){
    if(kl.length==0){
     return (
       <View style={styles.container}>
         <View style={styles.imgitems1} >
           <Text style={{color:'#f40b62',fontSize:15,fontWeight:'700',marginTop:10,marginLeft:15}}>Pas des commandes aujourd'hui</Text>
         
         </View>
 
       </View>
      );
     
    }else{
     return (
      
       kl.map(ItemView,f1,nom1)
       
      );
      
    }
    
   
  }
  const Modelform = (id)=>{
    setModalVisible(true);
    fetch(link1).then((response) => response.json())
    .then((resJson)=>{
      for(let user of resJson){
        if(user.idorder==id){
          setidorder(""+id);
          setCheesecakeOreo(""+user.q1);
          setCheesecakeDaim(""+user.q2);
          setCheesecakeSpeculos(""+user.q3);
          setTiramisuOreo(""+user.q4);
          setTiramisuDaim(""+user.q5);
          setTiramisuSpeculos(""+user.q6);
          setTiramisuFruitsRouges(""+user.q7);
          setTiramisuOreoNutella(""+user.q8);
          setTiramisuSchokoBons(""+user.q9);
          setClient(""+user.idclient);
          setdatecommande(""+user.datecommande);
          setv(""+user.v);
        }
      }
        
    });
    
  }
  const save = ()=>{
    let formData = new FormData();
    formData.append('q1',CheesecakeOreo);
    formData.append('q2',CheesecakeDaim);
    formData.append('q3',CheesecakeSpeculos);
    formData.append('q4',TiramisuOreo);
    formData.append('q5',TiramisuDaim);
    formData.append('q6',TiramisuSpeculos);
    formData.append('q7',TiramisuFruitsRouges);
    formData.append('q8',TiramisuOreoNutella);
    formData.append('q9',TiramisuSchokoBons);
    formData.append('idclient',Client);
    
    let datetime= new Date();
    const myObjStr = JSON.stringify(formData);
    if(CheesecakeOreo!='0' && Client!='0' || CheesecakeDaim!='0' && Client!='0' || CheesecakeSpeculos!='0'  && Client!='0' || TiramisuOreo!='0' && Client!='0' || TiramisuDaim!='0' && Client!='0' || TiramisuSpeculos!='0'  && Client!='0' || TiramisuFruitsRouges!='0'  && Client!='0' || TiramisuOreoNutella!='0' && Client!='0' || TiramisuSchokoBons!='0' && Client!='0'){
      fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders?idorder=eq."+idorder,{
          method:'PATCH',
          headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
          body:JSON.stringify({"q1":CheesecakeOreo,"q2":CheesecakeDaim,"q3":CheesecakeSpeculos,"q4":TiramisuOreo,"q5":TiramisuDaim,"q6":TiramisuSpeculos,"q7":TiramisuFruitsRouges,"q8":TiramisuOreoNutella,"q9":TiramisuSchokoBons})
      }).then(response => response.json())
      .then(data=> console.log(data))
      .catch(error => console.log(error))
      setTimeout(function (){
        setidorder("");
        setCheesecakeOreo("");
        setCheesecakeDaim("");
        setCheesecakeSpeculos("");
        setTiramisuOreo("");
        setTiramisuDaim("");
        setTiramisuSpeculos("");
        setTiramisuFruitsRouges("");
        setTiramisuOreoNutella("");
        setTiramisuSchokoBons("");
        setClient("");
        setdatecommande("");
        setv("");
        setModalVisible(false);
      },1000);
      
  }  
    
    

  }
  const valide = ()=>{
    alert(idorder);
  }
  const annuler = ()=>{
    setidorder("");
    setCheesecakeOreo("");
    setCheesecakeDaim("");
    setCheesecakeSpeculos("");
    setTiramisuOreo("");
    setTiramisuDaim("");
    setTiramisuSpeculos("");
    setTiramisuFruitsRouges("");
    setTiramisuOreoNutella("");
    setTiramisuSchokoBons("");
    setClient("");
    setdatecommande("");
    setv("");
    setModalVisible(false);
  }
  return (
    <View style={backgroundStyle}>
        <SafeAreaView style={{marginBottom:0,}} >
            <ScrollView refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }>
              
              {a()}

              

            </ScrollView>
          
        </SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modale a été fermé.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text style={titleStyle}>Modifier la commande</Text>
            <SafeAreaView style={{marginBottom:0,marginTop:15}}>
              <ScrollView>
                <View style={optionContainer} key="1">
                  <Text style={optionTextStyle}>Cheese cake Oreo</Text>
                  <TextInput 
                    placeholder="Quantité" value={CheesecakeOreo} onChangeText={text=> setCheesecakeOreo(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="2">
                  <Text style={optionTextStyle}>Cheese cake Daim</Text>
                  <TextInput 
                    placeholder="Quantité" value={CheesecakeDaim} onChangeText={text=> setCheesecakeDaim(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="3">
                  <Text style={optionTextStyle}>Cheese cake Spéculos</Text>
                  <TextInput 
                    placeholder="Quantité" value={CheesecakeSpeculos} onChangeText={text=> setCheesecakeSpeculos(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="4">
                  <Text style={optionTextStyle}>TiramisuOreo</Text>
                  <TextInput 
                    placeholder="Quantité" value={TiramisuOreo} onChangeText={text=> setTiramisuOreo(text)}
                      keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="5">
                  <Text style={optionTextStyle}>Tiramisu Daim</Text>
                  <TextInput 
                    placeholder="Quantité" value={TiramisuDaim} onChangeText={text=> setTiramisuDaim(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="6">
                  <Text style={optionTextStyle}>Tiramisu Speculos</Text>
                  <TextInput 
                    placeholder="Quantité" value={TiramisuSpeculos} onChangeText={text=> setTiramisuSpeculos(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="7">
                  <Text style={optionTextStyle}>Tiramisu Fruits Rouges</Text>
                  <TextInput 
                    placeholder="Quantité" value={TiramisuFruitsRouges} onChangeText={text=> setTiramisuFruitsRouges(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="8">
                  <Text style={optionTextStyle}>Tiramisu Oreo Nutella</Text>
                  <TextInput 
                    placeholder="Quantité" value={TiramisuOreoNutella} onChangeText={text=> setTiramisuOreoNutella(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>
                <View style={optionContainer} key="9">
                  <Text style={optionTextStyle}>Tiramisu Schoko Bons</Text>
                  <TextInput 
                    placeholder="Quantité" value={TiramisuSchokoBons} onChangeText={text=> setTiramisuSchokoBons(text)} keyboardType="numeric"
                    style={{borderColor:'#f40b62',color:'#f40b62',borderWidth:2,borderRadius:10,padding:5,paddingLeft:10,paddingRight:10,}}
                    />
                </View>

                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={save}
                        >
                            <Text style={styles.buttonText1}>Ajouter une commande</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={valide}
                        >
                            <Text style={styles.buttonText1}>Valider</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container2}>
                    <TouchableOpacity 
                        style={styles.button6} onPress={annuler}
                        >
                          <Text style={styles.buttonText1}>Annuler</Text>
                    </TouchableOpacity>

                    <Text style={styles.buttonText1}></Text>
                </View>  
              </ScrollView>
            </SafeAreaView>
          </View>
          </View>
        </Modal>
    </View>
    
  )
  
}

export default FindScreen
  

const styles = StyleSheet.create({

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
      
      alignItems: 'center',
      width:"100%",
      height:270,
      borderRadius:20,
      backgroundColor:"white",
    },
    imgitems1: {
      
      alignItems: 'center',
      width:"100%",
      height:45,
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
})

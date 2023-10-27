import { StatusBar } from 'expo-status-bar';
import { useColorScheme,Button,StyleSheet,SectionList, Text, TouchableOpacity, View ,TextInput , SafeAreaView, ScrollView,Image,RefreshControl,Modal, Pressable,Alert} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import { List } from 'react-native-paper';
import React, { useState , useEffect } from 'react'
import { mouseProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyModal from '../components/MyModal';
import PushNotification from "react-native-push-notification";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';






const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


let day=0;
let month=0;
let year=0;
let months=[];
let date=0;
day= new Date().getDate();
month= new Date().getMonth()+1;
year= new Date().getFullYear();
if(month=='1' || month=='2' || month=='3' || month=='4' || month=='5' || month=='6' || month=='7' || month=='8' || month=='9'){
  if(day=='1' || day=='2' || day=='3' || day=='4' || day=='5' || day=='6' || day=='7' || day=='8' || day=='9'){
    date=year+'-0'+month+'-0'+day;
  }else{
    date=year+'-0'+month+'-'+day;
  }
}else{
  if(month=='10' || month=='11' || month=='12'){
    if(day=='1' || day=='2' || day=='3' || day=='4' || day=='5' || day=='6' || day=='7' || day=='8' || day=='9'){
      date=year+'-'+month+'-0'+day;
    }else{
      date=year+'-'+month+'-'+day;
    }
  }
}
if(month==1){
  months=[["Janvier "+year,year+'-01',1],["Décembre "+(year-1),(year-1)+'-12',2],["Novembre "+(year-1),(year-1)+'-11',3],["Octobre "+(year-1),(year-1)+'-10',4],["Septembre "+(year-1),(year-1)+'-09',5],["Août "+(year-1),(year-1)+'-08',6],["Juillet "+(year-1),(year-1)+'-07',7],["Juin "+(year-1),(year-1)+'-06',8],["Mai "+(year-1),(year-1)+'-05',9],["Avril "+(year-1),(year-1)+'-04',10],["Mars "+(year-1),(year-1)+'-03',11],["Février "+(year-1),(year-1)+'-02',12]];
}
if(month==2){
  months=[["Février "+year,year+'-02',1],["Janvier "+year,year+'-01',2],["Décembre "+(year-1),(year-1)+'-12',3],["Novembre "+(year-1),(year-1)+'-11',4],["Octobre "+(year-1),(year-1)+'-10',5],["Septembre "+(year-1),(year-1)+'-09',6],["Août "+(year-1),(year-1)+'-08',7],["Juillet "+(year-1),(year-1)+'-07',8],["Juin "+(year-1),(year-1)+'-06',9],["Mai "+(year-1),(year-1)+'-05',10],["Avril "+(year-1),(year-1)+'-04',11],["Mars "+(year-1),(year-1)+'-03',12]];
}
if(month==3){
  months=[["Mars "+year,year+'-03',1],["Février "+year,year+'-02',2],["Janvier "+year,year+'-01',3],["Décembre "+(year-1),(year-1)+'-12',4],["Novembre "+(year-1),(year-1)+'-11',5],["Octobre "+(year-1),(year-1)+'-10',6],["Septembre "+(year-1),(year-1)+'-09',7],["Août "+(year-1),(year-1)+'-08',8],["Juillet "+(year-1),(year-1)+'-07',9],["Juin "+(year-1),(year-1)+'-06',10],["Mai "+(year-1),(year-1)+'-05',11],["Avril "+(year-1),(year-1)+'-04',12]];
}
if(month==4){
  months=[["Avril "+year,year+'-04',1],["Mars "+year,year+'-03',2],["Février "+year,year+'-02',3],["Janvier "+year,year+'-01',4],["Décembre "+(year-1),(year-1)+'-12',5],["Novembre "+(year-1),(year-1)+'-11',6],["Octobre "+(year-1),(year-1)+'-10',7],["Septembre "+(year-1),(year-1)+'-09',8],["Août "+(year-1),(year-1)+'-08',9],["Juillet "+(year-1),(year-1)+'-07',10],["Juin "+(year-1),(year-1)+'-06',11],["Mai "+(year-1),(year-1)+'-05',12]];
}
if(month==5){
  months=[["Mai "+year,year+'-05',1],["Avril "+year,year+'-04',2],["Mars "+year,year+'-03',3],["Février "+year,year+'-02',4],["Janvier "+year,year+'-01',5],["Décembre "+(year-1),(year-1)+'-12',6],["Novembre "+(year-1),(year-1)+'-11',7],["Octobre "+(year-1),(year-1)+'-10',8],["Septembre "+(year-1),(year-1)+'-09',9],["Août "+(year-1),(year-1)+'-08',10],["Juillet "+(year-1),(year-1)+'-07',11],["Juin "+(year-1),(year-1)+'-06',12]];
}
if(month==6){
  months=[["Juin "+year,year+'-06',1],["Mai "+year,year+'-05',2],["Avril "+year,year+'-04',3],["Mars "+year,year+'-03',4],["Février "+year,year+'-02',5],["Janvier "+year,year+'-01',6],["Décembre "+(year-1),(year-1)+'-12',7],["Novembre "+(year-1),(year-1)+'-11',8],["Octobre "+(year-1),(year-1)+'-10',9],["Septembre "+(year-1),(year-1)+'-09',10],["Août "+(year-1),(year-1)+'-08',11],["Juillet "+(year-1),(year-1)+'-07',12]];
}
if(month==7){
  months=[["Juillet "+year,year+'-07',1],["Juin "+year,year+'-06',2],["Mai "+year,year+'-05',3],["Avril "+year,year+'-04',4],["Mars "+year,year+'-03',5],["Février "+year,year+'-02',6],["Janvier "+year,year+'-01',7],["Décembre "+(year-1),(year-1)+'-12',8],["Novembre "+(year-1),(year-1)+'-11',9],["Octobre "+(year-1),(year-1)+'-10',10],["Septembre "+(year-1),(year-1)+'-09',11],["Août "+(year-1),(year-1)+'-08',12]];
}
if(month==8){
  months=[["Août "+year,year+'-08',1],["Juillet "+year,year+'-07',2],["Juin "+year,year+'-06',3],["Mai "+year,year+'-05',4],["Avril "+year,year+'-04',5],["Mars "+year,year+'-03',6],["Février "+year,year+'-02',7],["Janvier "+year,year+'-01',8],["Décembre "+(year-1),(year-1)+'-12',9],["Novembre "+(year-1),(year-1)+'-11',10],["Octobre "+(year-1),(year-1)+'-10',11],["Septembre "+(year-1),(year-1)+'-09',12]];
}
if(month==9){
  months=[["Septembre "+year,year+'-09',1],["Août "+year,year+'-08',2],["Juillet "+year,year+'-07',3],["Juin "+year,year+'-06',4],["Mai "+year,year+'-05',5],["Avril "+year,year+'-04',6],["Mars "+year,year+'-03',7],["Février "+year,year+'-02',8],["Janvier "+year,year+'-01',9],["Décembre "+(year-1),(year-1)+'-12',10],["Novembre "+(year-1),(year-1)+'-11',11],["Octobre "+(year-1),(year-1)+'-10',12]];
}
if(month==10){
  months=[["Octobre "+year,year+'-10',1],["Septembre "+year,year+'-09',2],["Août "+year,year+'-08',3],["Juillet "+year,year+'-07',4],["Juin "+year,year+'-06',5],["Mai "+year,year+'-05',6],["Avril "+year,year+'-04',7],["Mars "+year,year+'-03',8],["Février "+year,year+'-02',9],["Janvier "+year,year+'-01',10],["Décembre "+(year-1),(year-1)+'-12',11],["Novembre "+(year-1),(year-1)+'-11',12]];
}
if(month==11){
  months=[["Novembre "+year,year+'-11',1],["Octobre "+year,year+'-10',2],["Septembre "+year,year+'-09',3],["Août "+year,year+'-08',4],["Juillet "+year,year+'-07',5],["Juin "+year,year+'-06',6],["Mai "+year,year+'-05',7],["Avril "+year,year+'-04',8],["Mars "+year,year+'-03',9],["Février "+year,year+'-02',10],["Janvier "+year,year+'-01',11],["Décembre "+(year-1),(year-1)+'-12',12]];
}
if(month==12){
  months=[["Décembre "+year,year+'-12',1],["Novembre "+year,year+'-11',2],["Octobre "+year,year+'-10',3],["Septembre "+year,year+'-09',4],["Août "+year,year+'-08',5],["Juillet "+year,year+'-07',6],["Juin "+year,year+'-06',7],["Mai "+year,year+'-05',8],["Avril "+year,year+'-04',9],["Mars "+year,year+'-03',10],["Février "+year,year+'-02',11],["Janvier "+(year-1),(year-1)+'-01',12]];
}
let item=[];
let item1=[];
let item2=[];
let items=[];
let item3=[];
let m1=[];
let m2=[];
let m3=[];
let m4=[];
let m5=[];
let m6=[];
let m7=[];
let m8=[];
let m9=[];
let m10=[];
let m11=[];
let m12=[];

let clie=[];
let ord=[];
let pd=[];

let ored=[];
let b1 =  920;
let f=1;
let i=1;
let k=0;
let j=0;
let m=0;
let nom="";
let n=0;
let qq1=0;
let t=0;
let link = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
let linkclient = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';


    
  const ItemView = (key,f,nom) => {
    
      return (
        <List.Accordion key={months[f][2]}
          title={months[f][0]} description={'Nombre des comondes : '+item3[f].length}
          left={props => <List.Icon {...props} icon="calendar-outline" />}>
          {item3[f].map(ItemViews,f,nom)}
        </List.Accordion>
        
      );
  
    };

    

 

const PostScreen = () => {
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
  };
  const optionContainer = {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  };

  const modalContainerStyle1 = {
    flex: 1,
    justifyContent: 'flex-end',
    
  };
  const modalStyle1 = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    alignItems: 'center',
    
    margin: 25,
    height:220,
    marginBottom:'60%',
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
  const titleStyle1 = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#f40b62',
  };
  const optionTextStyle1 = {
    fontSize: 18,
    fontWeight: '500',
    color: isDarkMode ? 'white' : 'black',
  };
  const optionContainer1 = {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  };

  const [text, setText] = useState('0');
  const [idorder, setidorder] = useState('') ;
  const [idpdf, setidpdf] = useState('') ;
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
  const [token, settoken] =  useState('0');
  
  setInterval(function(){
    item1=[];
    item2=[];    
    for (let userObject1 of clie) {
      item1=[userObject1.id,userObject1.Nom];
      item2.push(item1);
    }
  
    items=[];
    item3=[];
    m1=[];
    m2=[];
    m3=[];
    m4=[];
    m5=[];
    m6=[];
    m7=[];
    m8=[];
    m9=[];
    m10=[];
    m11=[];
    m12=[];
    i=1;
    for (let userObject of ord) {
      for(let it of item2){
          m=it[0];
          qq1=userObject.idclient;
          if(qq1==m){
              i++;
              nom=it[1];
              item=[userObject.q1,userObject.q2,userObject.q3,userObject.q4,userObject.q5,userObject.q6,userObject.q7,userObject.q8,userObject.q9,userObject.idclient,userObject.datecommande,nom,userObject.idorder,userObject.v];
              items.push(item);
              b1=userObject.datecommande[0]+userObject.datecommande[1]+userObject.datecommande[2]+userObject.datecommande[3]+userObject.datecommande[4]+userObject.datecommande[5]+userObject.datecommande[6];
              if(b1==months[0][1]){
                m1.push(item);
              }
              if(b1==months[1][1]){
                m2.push(item);
              }
              if(b1==months[2][1]){
                m3.push(item);
              }
              if(b1==months[3][1]){
                m4.push(item);
              }
              if(b1==months[4][1]){
                m5.push(item);
              }
              if(b1==months[5][1]){
                m6.push(item);
              }
              if(b1==months[6][1]){
                m7.push(item);
              }
              if(b1==months[7][1]){
                m8.push(item);
              }
              if(b1==months[8][1]){
                m9.push(item);
              }
              if(b1==months[9][1]){
                m10.push(item);
              }
              if(b1==months[10][1]){
                m11.push(item);
              }
              if(b1==months[11][1]){
                m12.push(item);
              }
          } 
              
      }   
    }
    if(i>ord.length){
      item3=[m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12]; 
      i=1;
    }
    
  }, 1000);

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
  const [modalVisible1, setModalVisible1] = useState(false);

  function h(id){
    setModalVisible1(true);

    setidorder(id);
    for(let user of ord){
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
  }
  function j(id,v){
    if(v==0){
      return(
        <View style={styles.items222}>
          <TouchableOpacity style={styles.button11} onPress={() => {h(id)}}>
              <Text style={styles.buttonText11}><Icon name="check" size={25} color="white" /></Text>
          </TouchableOpacity>
        </View>
      )
      
    }
    
    
   
  }
  const ItemViews = (key,f,nom) => {
    return (
      
      <View style={styles.container} key={nom[f][12]}>
        <View style={styles.imgitems} >
            <Text style={{color:'#f40b62',fontSize:20,fontWeight:'700',marginTop:15}}>Client : {nom[f][11]}</Text>
          <View style={{marginTop:15}}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#f40b62',position:'absolute',}}>
              <Row data={['TO', 'TD', 'TS', 'TFR', 'TON', 'TSB']} style={styles.head} textStyle={{color:'white',marginLeft:15,}}/>
              <Rows data={[['   '+nom[f][3], '   '+nom[f][4], '   '+nom[f][5], '   '+nom[f][6], '   '+nom[f][7], '   '+nom[f][8]]]} textStyle={styles.text} style={{}}/>
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: '#f40b62',position:'absolute',}}>
              <Row data={['       CO', '       CD', '       CS']} style={styles.head} textStyle={{color:'white',marginLeft:15,}}/>
              <Rows data={[['          '+nom[f][0], '          '+nom[f][1], '          '+nom[f][2]]]} textStyle={styles.text} style={{}}/>
            </Table>
          </View>
          
        </View>
        <View style={styles.items1}>
            <Text style={{color:'white',fontSize:15}}>Date de Commande</Text>
        </View>
        <View style={styles.items2}>
          <Text style={{color:'white',fontSize:15}}>{nom[f][10]}</Text>
        </View>
        <View style={styles.items22}>
          <TouchableOpacity style={styles.button1} onPress={() => {Modelform(nom[f][12])}}>
              <Text style={styles.buttonText1}><Icon name="edit" size={25} color="white" /></Text>
          </TouchableOpacity>
        </View>
        
        {j(nom[f][12],nom[f][13])}
      </View>
      
    );

  }; 
  const Modelform = (id)=>{
    setModalVisible(true);
    setidorder(id);
    for(let user of ord){
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
        for(let client of clie){
          if(client.id==user.idclient){
            settoken(""+client.token);
          }
        }
      }
    }
    
  }
  const save = ()=>{
    
    let datetime= new Date();
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
        onRefresh();
        setModalVisible(false);
        fetch("https://exp.host/--/api/v2/push/send",{
          method:'POST',
          headers: {"Content-type": "application/json"},
          body:JSON.stringify({                 
            "to": ""+token,
            "title": "La quantité de votre commande est mise à jour",

            "sound": "default",
            "vibrate": true
          })
        }).then(response => response.json())
        .then(data=> console.log(data))
        .catch(error => console.log(error))
      },1000);
      
  }  
    
    

  }
  const valide = ()=>{
    month= new Date().getMonth()+1;
    let idpdfs="";
    if(month==1 || month==2 || month==3 || month==4 || month==5 || month==6 || month==7 || month==8 || month==9){
      month="0"+month;
    }
    for (let userObject of ord) {
      if(userObject.idorder==idorder){
        for (let userObject1 of clie) {
          if(userObject1.id==userObject.idclient){
            
            if((userObject1.nombrefacture+1)<10){
              setidpdf(userObject1.id+""+month+"000"+(userObject1.nombrefacture+1));
              idpdfs=userObject1.id+""+month+"000"+(userObject1.nombrefacture+1);
            }
            if((userObject1.nombrefacture+1)>10 && (userObject1.nombrefacture+1)<100){
              setidpdf(userObject1.id+""+month+"00"+(userObject1.nombrefacture+1));
              idpdfs=userObject1.id+""+month+"00"+(userObject1.nombrefacture+1);
            }
            if((userObject1.nombrefacture+1)>100 && (userObject1.nombrefacture+1)<1000){
              setidpdf(userObject1.id+""+month+"0"+(userObject1.nombrefacture+1));
              idpdfs=userObject1.id+""+month+"0"+(userObject1.nombrefacture+1);
            }
            if((userObject1.nombrefacture+1)>1000){
              setidpdf(userObject1.id+""+month+""+(userObject1.nombrefacture+1));
              idpdfs=userObject1.id+""+month+""+(userObject1.nombrefacture+1);
            }
            setTimeout(function(){
              fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?id=eq."+userObject1.id,{
                method:'PATCH',
                headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
                body:JSON.stringify({"nombrefacture":(userObject1.nombrefacture+1)})
              }).then(response => response.json())
              .then(data=> console.log(data))
              .catch(error => console.log(error))
              
              setTimeout(function(){
                fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders?idorder=eq."+userObject.idorder,{
                    method:'PATCH',
                    headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
                    body:JSON.stringify({"v":1})
                  }).then(response => response.json())
                  .then(data=> console.log(data))
                  .catch(error => console.log(error))
              },500);

              setTimeout(function(){
                fetch("https://qevggptfikxxyodubdwn.supabase.co/rest/v1/pdf",{
                    method:'POST',
                    headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4","Content-type": "application/json"},
                    body:JSON.stringify({"idpdf":idorder,"p1":userObject1.p1,"p2":userObject1.p2,"p3":userObject1.p3,"p4":userObject1.p4,"p5":userObject1.p5,"p6":userObject1.p6,"p7":userObject1.p7,"p8":userObject1.p8,"p9":userObject1.p9,"idfacture":idpdfs})
                  }).then(response => response.json())
                  .then(data=> console.log(data))
                  .catch(error => console.log(error))
                  setModalVisible1(false);
                  onRefresh();
              },500);
            },500);
            fetch("https://exp.host/--/api/v2/push/send",{
              method:'POST',
              headers: {"Content-type": "application/json"},
              body:JSON.stringify({                 
                "to": ""+userObject1.token,
                "title": "Votre commande est validée",

                "sound": "default",
                "vibrate": true
              })
            }).then(response => response.json())
            .then(data=> console.log(data))
            .catch(error => console.log(error))
            
          }
        }
      }   
    }
    
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
  const annuler1 = ()=>{
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
    setModalVisible1(false);
  }

  if(t==0){
    t=1;
    setTimeout(function(){
      onRefresh();
    },1000)
    
  }
  
  try {
    return (
      <View style={backgroundStyle}>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          <List.Section title="Liste Des Commandes">
            <List.Accordion key={months[0][2]}
              title={months[0][0]} description={'Nombre des comondes : '+m1.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m1.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[1][2]}
              title={months[1][0]} description={'Nombre des comondes : '+m2.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m2.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[2][2]}
              title={months[2][0]} description={'Nombre des comondes : '+m3.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m3.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[3][2]}
              title={months[3][0]} description={'Nombre des comondes : '+m4.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m4.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[4][2]}
              title={months[4][0]} description={'Nombre des comondes : '+m5.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m5.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[5][2]}
              title={months[5][0]} description={'Nombre des comondes : '+m6.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m6.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[6][2]}
              title={months[6][0]} description={'Nombre des comondes : '+m7.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m7.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[7][2]}
              title={months[7][0]} description={'Nombre des comondes : '+m8.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m8.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[8][2]}
              title={months[8][0]} description={'Nombre des comondes : '+m9.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m9.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[9][2]}
              title={months[9][0]} description={'Nombre des comondes : '+m10.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m10.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[10][2]}
              title={months[10][0]} description={'Nombre des comondes : '+m11.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m11.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={months[11][2]}
              title={months[11][0]} description={'Nombre des comondes : '+m12.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m12.map(ItemViews,f,nom)}
            </List.Accordion>
            
          </List.Section>
          
        </ScrollView>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modale a été fermé.");
              setModalVisible(!modalVisible);
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
  
                  <View  style={styles.container2}>
                      <TouchableOpacity 
                          style={styles.button6} onPress={save}
                          >
                              <Text style={styles.buttonText1}>Modifier</Text>
                      </TouchableOpacity>
  
                  </View>
                  
                  <View  style={styles.container2}>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modale a été fermé.");
            setModalVisible1(!modalVisible1);
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
          }}
        >
          <View style={modalContainerStyle1}>
            <View style={modalStyle1}>
              <Text style={titleStyle1}>Validation de commande</Text>
              <View style={styles.container2}>
                  <TouchableOpacity 
                      style={styles.button66} onPress={valide}
                      >
                          <Text style={styles.buttonText1}>Valider</Text>
                  </TouchableOpacity>
          
              </View>
              <View  style={styles.container2}>
                  <TouchableOpacity 
                      style={styles.button66} onPress={annuler1}
                      >
                          <Text style={styles.buttonText1}>Annuler</Text>
                  </TouchableOpacity>
  
                  <Text style={styles.buttonText1}></Text>
              </View>
              
            </View>
          </View>
        </Modal>
      </View>
      
    )  
  } catch (error) {
    console.error(error)
    onRefresh()
  }
  
}

export default PostScreen
  

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
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
      height:270,
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
    right:'2%',
    height:70,
    width:'25%',
    
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  button1:{
    backgroundColor:'#f40b62',
    width:'50%',
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
    right:'89%',
    height:70,
    width:'25%',
    
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  button11:{
    backgroundColor:'#4CAF50',
    width:'50%',
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
})

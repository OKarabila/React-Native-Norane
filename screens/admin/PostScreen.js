import { StatusBar } from 'expo-status-bar';
import { useColorScheme,Button,StyleSheet,SectionList, Text, TouchableOpacity, View ,TextInput , SafeAreaView, ScrollView,Image,RefreshControl,Modal, Pressable,Alert} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import { List } from 'react-native-paper';
import React, { useState , useEffect } from 'react'
import { mouseProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';


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
let link1 = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/orders?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
let linkclient1 = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/client?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';
let linkpdf1 = 'https://qevggptfikxxyodubdwn.supabase.co/rest/v1/pdf?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldmdncHRmaWt4eHlvZHViZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODc2NjMsImV4cCI6MTk2OTA2MzY2M30.t2oEAv0XjmwFjzVaDWH0qxSh1nCdEx-emA9WOWzaMH4';





  let item4 = [];
  let item9 = [];
  let item90 = [];
  let item91 = [];
    
 

const PostScreen = () => {
  React.useEffect(() => {
    fetch(linkclient1).then((responses) => responses.json())
    .then((resJsons)=>{  
      clie=resJsons;
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
        throw error;
      });

    fetch(link1).then((response) => response.json())
    .then((resJson)=>{
      ord=resJson;
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
        throw error;
      });
    

    fetch(linkpdf1).then((responses) => responses.json())
    .then((resJsons)=>{  
      pd=resJsons;
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
        throw error;
      });
  })

  const [p1, setP1] =  useState('')
  const [p2, setP2] =  useState('')
  const [p3, setP3] =  useState('')
  const [p4, setP4] =  useState('')
  const [p5, setP5] =  useState('')
  const [p6, setP6] =  useState('')
  const [p7, setP7] =  useState('')
  const [p8, setP8] =  useState('')
  const [p9, setP9] =  useState('')



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
  AsyncStorage.getItem('p1').then((value)=>{setP1(value)});
  AsyncStorage.getItem('p2').then((value)=>{setP2(value)});
  AsyncStorage.getItem('p3').then((value)=>{setP3(value)});
  AsyncStorage.getItem('p4').then((value)=>{setP4(value)});
  AsyncStorage.getItem('p5').then((value)=>{setP5(value)});
  AsyncStorage.getItem('p6').then((value)=>{setP6(value)});
  AsyncStorage.getItem('p7').then((value)=>{setP7(value)});
  AsyncStorage.getItem('p8').then((value)=>{setP8(value)});
  AsyncStorage.getItem('p9').then((value)=>{setP9(value)});

  setInterval(function(){
    item1=[];
    item2=[];    
    for (let userObject1 of clie) {
      if(userObject1.id==idclient){
        item1=[userObject1.id,userObject1.Nom];
        item2.push(item1);
      } 
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
    for (let userObject1 of pd) {
      item4=[userObject1.id,userObject1.idpdf,userObject1.p1,userObject1.p2,userObject1.p3,userObject1.p4,userObject1.p5,userObject1.p6,userObject1.p7,userObject1.p8,userObject1.p9,userObject1.idfacture];
      item9.push(item4);
    }
  }, 1000);
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const n = async (htmls) =>{
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html:htmls,
      fileName: 'test',
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const print = async (id) => {


    for(let s of item9){
      if(s[1]==id){
        item90=[s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],s[9],s[10],s[11],s[12]];
      } 
    }

    for(let s of items){
      if(s[12]==id){
        item91=[s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],s[9],s[10],s[11],s[12]];

      } 
    }

    let totalortax=((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9)).toFixed(2);
    let tax=((((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9))*25)/100).toFixed(2);
    let total=(((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9))+((((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9))*25)/100)).toFixed(2);

    setTimeout(function(){
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Facture d'achat</title>

        <style>
          .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
          }

          .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
                    
          }

          .invoice-box table td {
            vertical-align: top;
          }

          .invoice-box table tr td:nth-child(2) {
            text-align: right;
          }

          .invoice-box table tr.top table td {
            padding-bottom: 0px;
          }

          .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
          }

          .invoice-box table tr.information table td {
            padding-bottom: 20px;
          }

          .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
          }

          .invoice-box table tr.details td {
            padding-bottom: 10px;
          }

          .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
          }

          .invoice-box table tr.item.last td {
            border-bottom: none;
          }

          .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
          }

          @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
              width: 100%;
              display: block;
              text-align: center;
            }

            .invoice-box table tr.information table td {
              width: 100%;
              display: block;
              text-align: center;
            }
          }

          /** RTL **/
          .invoice-box.rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
          }

          .invoice-box.rtl table {
            text-align: right;
          }

          .invoice-box.rtl table tr td:nth-child(2) {
            text-align: left;
          }
          
        </style>
      </head>

      <body>
        <div class="invoice-box">
          <table cellpadding="0" cellspacing="0">
            <tr class="top">
              <td colspan="2">
                <table>
                  <tr>
                    <td class="title">
                      <img src="https://norane.fr/BtoB/images/Logo_TraiteurDavidRougeBr.png" style="width: 100%; max-width: 300px" />
                    </td>

                    
                  </tr>
                </table>
              </td>
            </tr>

            <tr class="information">
              <td colspan="4">
                <table>
                  <tr>
                    <td>
                    Facturer à :<br />
                    `+Nom+`<br />
                    `+email+`<br />
                    `+telephone+`
                    </td>

                    <td >
                      Numéro de facture : `+item90[11]+`<br />
                      Date : `+item91[10]+`
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr class="heading">
              <td style="text-align: left;">Produit</td>
              <td style="text-align: center;">Prix</td>
              <td style="text-align: center;">Quantité</td>
              <td style="text-align: center;">Prix Total</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Cheese cake Oreo</td>
              <td style="text-align: center;">`+p1+` €</td>
              <td style="text-align: center;">`+item91[0]+`</td>
              <td style="text-align: center;">`+(item91[0]*p1).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Cheese cake Daim</td>
              <td style="text-align: center;">`+p2+` €</td>
              <td style="text-align: center;">`+item91[1]+`</td>
              <td style="text-align: center;">`+(item91[1]*p2).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Cheese cake Spéculos</td>
              <td style="text-align: center;">`+p3+` €</td>
              <td style="text-align: center;">`+item91[2]+`</td>
              <td style="text-align: center;">`+(item91[2]*p3).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu oreo</td>
              <td style="text-align: center;">`+p4+` €</td>
              <td style="text-align: center;">`+item91[3]+`</td>
              <td style="text-align: center;">`+(item91[3]*p4).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Daim</td>
              <td style="text-align: center;">`+p5+` €</td>
              <td style="text-align: center;">`+item91[4]+`</td>
              <td style="text-align: center;">`+(item91[4]*p5).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Spéculos</td>
              <td style="text-align: center;">`+p6+` €</td>
              <td style="text-align: center;">`+item91[5]+`</td>
              <td style="text-align: center;">`+(item91[5]*p6).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Fruits Rouges</td>
              <td style="text-align: center;">`+p7+` €</td>
              <td style="text-align: center;">`+item91[6]+`</td>
              <td style="text-align: center;">`+(item91[6]*p7).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Oreo Nutella</td>
              <td style="text-align: center;">`+p8+` €</td>
              <td style="text-align: center;">`+item91[7]+`</td>
              <td style="text-align: center;">`+(item91[7]*p8).toFixed(2)+` €</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Schoko Bons</td>
              <td style="text-align: center;">`+p9+` €</td>
              <td style="text-align: center;">`+item91[8]+`</td>
              <td style="text-align: center;">`+(item91[8]*p9).toFixed(2)+` €</td>
            </tr>

            
          </table>
                <table style="width: 40%;margin-left: 60%;padding-top: 10px;">
                    <tr class="heading" cellpadding="0" cellspacing="0">
              <td>Total due</td>

              <td style="text-align: center;">Prix</td>
            </tr>

            <tr class="item">
              <td>Subtotal :</td>

              <td style="text-align: center;">`+totalortax+` €</td>
            </tr>

            <tr class="item">
              <td>Tax : (25%)</td>

              <td style="text-align: center;">`+tax+` €</td>
            </tr>

            <tr class="total">
              <td>Total :</td>

              <td style="text-align: center;">`+total+` €</td>
            </tr>
          </table>
          <div style="text-align: center;padding-top: 50px;">
            <div style="text-align: center;background-color: rgb(228, 228, 228);">
                <div><a style="text-align: center;color:#f40b62;text-decoration: none;font-size: 20px;" href="https://traiteurbordeaux.fr/">Traiteur Bordeaux</a></div>
                <div style="text-align: center;text-decoration: none;font-size: 15px;">1 Place François Mitterrand, 33150 Cenon,France<br>Contact@TraiteurBordeaux.fr<br>06-66-33-69-62</div>
            </div>
          </div>
        </div>
        
      </body>
    </html>
        
    `;
    
      n(html);
    },1000);
    
    
  }

  const [selectedPrinter1, setSelectedPrinter1] = React.useState();

  const n1 = async (htmls1) =>{
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html:htmls1,
      fileName: 'test',
      printerUrl: selectedPrinter1?.url, // iOS only
    });
  }

  const print1 = async (id) => {


    for(let s of item9){
      if(s[1]==id){
        item90=[s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],s[9],s[10],s[11],s[12]];
      } 
    }

    for(let s of items){
      if(s[12]==id){
        item91=[s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],s[9],s[10],s[11],s[12]];

      } 
    }

    let totalortax=((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9)).toFixed(2);
    let tax=((((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9))*25)/100).toFixed(2);
    let total=(((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9))+((((item91[0]*p1)+(item91[1]*p2)+(item91[2]*p3)+(item91[3]*p4)+(item91[4]*p5)+(item91[5]*p6)+(item91[6]*p7)+(item91[7]*p8)+(item91[8]*p9))*25)/100)).toFixed(2);

    setTimeout(function(){
    const html1 = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Facture d'achat</title>

        <style>
          .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
          }

          .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
                    
          }

          .invoice-box table td {
            vertical-align: top;
          }

          .invoice-box table tr td:nth-child(2) {
            text-align: right;
          }

          .invoice-box table tr.top table td {
            padding-bottom: 0px;
          }

          .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
          }

          .invoice-box table tr.information table td {
            padding-bottom: 20px;
          }

          .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
          }

          .invoice-box table tr.details td {
            padding-bottom: 10px;
          }

          .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
          }

          .invoice-box table tr.item.last td {
            border-bottom: none;
          }

          .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
          }

          @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
              width: 100%;
              display: block;
              text-align: center;
            }

            .invoice-box table tr.information table td {
              width: 100%;
              display: block;
              text-align: center;
            }
          }

          /** RTL **/
          .invoice-box.rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
          }

          .invoice-box.rtl table {
            text-align: right;
          }

          .invoice-box.rtl table tr td:nth-child(2) {
            text-align: left;
          }
          
        </style>
      </head>

      <body>
        <div class="invoice-box">
          <table cellpadding="0" cellspacing="0">
            <tr class="top">
              <td colspan="2">
                <table>
                  <tr>
                    <td class="title">
                      <img src="https://norane.fr/BtoB/images/Logo_TraiteurDavidRougeBr.png" style="width: 100%; max-width: 300px" />
                    </td>

                    
                  </tr>
                </table>
              </td>
            </tr>

            <tr class="information">
              <td colspan="4">
                <table>
                  <tr>
                    <td>
                    Facturer à :<br />
                    `+Nom+`<br />
                    `+email+`<br />
                    `+telephone+`
                    </td>

                    <td >
                      Numéro de facture : `+item90[11]+`<br />
                      Date : `+item91[10]+`
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr class="heading">
              <td style="text-align: left;">Produit</td>

              <td style="text-align: center;">Quantité</td>

            </tr>

            <tr class="details">
              <td style="text-align: left;">Cheese cake Oreo</td>
              <td style="text-align: center;">`+item91[0]+`</td>


            </tr>

            <tr class="details">
              <td style="text-align: left;">Cheese cake Daim</td>

              <td style="text-align: center;">`+item91[1]+`</td>

            </tr>

            <tr class="details">
              <td style="text-align: left;">Cheese cake Spéculos</td>

              <td style="text-align: center;">`+item91[2]+`</td>

            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu oreo</td>

              <td style="text-align: center;">`+item91[3]+`</td>
    
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Daim</td>
  
              <td style="text-align: center;">`+item91[4]+`</td>
  
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Spéculos</td>
    
              <td style="text-align: center;">`+item91[5]+`</td>
     
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Fruits Rouges</td>
              <td style="text-align: center;">`+item91[6]+`</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Oreo Nutella</td>
              <td style="text-align: center;">`+item91[7]+`</td>
            </tr>

            <tr class="details">
              <td style="text-align: left;">Tiramisu Schoko Bons</td>
              <td style="text-align: center;">`+item91[8]+`</td>
            </tr>

            
          </table>
                <table style="width: 40%;margin-left: 60%;padding-top: 10px;">
                    <tr class="heading" cellpadding="0" cellspacing="0">
              <td>Total due</td>

              <td style="text-align: center;">Prix</td>
            </tr>

            <tr class="item">
              <td>Subtotal :</td>

              <td style="text-align: center;">`+totalortax+` €</td>
            </tr>

            <tr class="item">
              <td>Tax : (25%)</td>

              <td style="text-align: center;">`+tax+` €</td>
            </tr>

            <tr class="total">
              <td>Total :</td>

              <td style="text-align: center;">`+total+` €</td>
            </tr>
          </table>
          <div style="text-align: center;padding-top: 50px;">
            <div style="text-align: center;background-color: rgb(228, 228, 228);">
                <div><a style="text-align: center;color:#f40b62;text-decoration: none;font-size: 20px;" href="https://traiteurbordeaux.fr/">Traiteur Bordeaux</a></div>
                <div style="text-align: center;text-decoration: none;font-size: 15px;">1 Place François Mitterrand, 33150 Cenon,France<br>Contact@TraiteurBordeaux.fr<br>06-66-33-69-62</div>
            </div>
          </div>
        </div>
        
      </body>
    </html>
        
    `;
    
      n1(html1);
    },1000);
    
    
  }


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


  function j(id,v){
    if(v==1){
      return(
        <View style={styles.items222}>
          <TouchableOpacity style={styles.button11} onPress={() => {print(id)}}>
              <Text style={styles.buttonText11}><Image //source={require('../../img/file-Invoice2.png')} 
              style={{width:25,height:25}} /></Text>
          </TouchableOpacity>
        </View>
      )
      
    }
    
    
   
  }
  function d(id,v){
    if(v==1){
      return(
        <View style={styles.items22}>
          <TouchableOpacity style={styles.button1} onPress={() => {print1(id)}}>
              <Text style={styles.buttonText1}><Image //source={require('../../img/file-Invoice1.png')}
               style={{width:25,height:25}} /></Text>
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
        
        {d(nom[f][12],nom[f][13])}
        {j(nom[f][12],nom[f][13])}
      </View>
      
    );

  }; 
 
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
            <List.Accordion key={1}
              title={months[0][0]} description={'Nombre des comondes : '+m1.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m1.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={2}
              title={months[1][0]} description={'Nombre des comondes : '+m2.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m2.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={3}
              title={months[2][0]} description={'Nombre des comondes : '+m3.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m3.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={4}
              title={months[3][0]} description={'Nombre des comondes : '+m4.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m4.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={5}
              title={months[4][0]} description={'Nombre des comondes : '+m5.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m5.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={6}
              title={months[5][0]} description={'Nombre des comondes : '+m6.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m6.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={7}
              title={months[6][0]} description={'Nombre des comondes : '+m7.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m7.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={8}
              title={months[7][0]} description={'Nombre des comondes : '+m8.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m8.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={9}
              title={months[8][0]} description={'Nombre des comondes : '+m9.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m9.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={10}
              title={months[9][0]} description={'Nombre des comondes : '+m10.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m10.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={11}
              title={months[10][0]} description={'Nombre des comondes : '+m11.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m11.map(ItemViews,f,nom)}
            </List.Accordion>
            <List.Accordion key={12}
              title={months[11][0]} description={'Nombre des comondes : '+m12.length}
              left={props => <List.Icon {...props} icon="calendar-outline" />}>
              {m12.map(ItemViews,f,nom)}
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View> 
    )      
  } catch (error) {
    console.error(error)
    onRefresh();
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
    marginBottom:10,
    borderRadius:10,
    alignItems:'center',
  },
  buttonText1:{
      color:'white',
      height:40,
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
    backgroundColor:'#f40b62',
    width:'52%',
    marginBottom:10,
    borderRadius:10,
    alignItems:'center',
    
  },
  buttonText11:{
      color:'white',
      height:40,
  },
})

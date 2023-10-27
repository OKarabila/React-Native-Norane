import  React, { useState , useEffect } from 'react';
import {Text, Modal, View, Button, Switch,TextInput,StyleSheet, ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
export default function MyModal({isModalOpen, isDarkMode, setIsModalOpen}) {
  const [switch1, setSwitch1] = React.useState(false);
  const [switch2, setSwitch2] = React.useState(false);
  const [switch3, setSwitch3] = React.useState(false);

  const modalOptions = [
    {
      title: '💡 Tips',
      value: switch1,
      setSwitch: setSwitch1,
    },
    {
      title: '🌕 Set dark mode',
      value: switch2,
      setSwitch: setSwitch2,
    },
    {
      title: '✈️ Airplane mode',
      value: switch3,
      setSwitch: setSwitch3,
    },
  ];

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
    setIsModalOpen(!setIsModalOpen);


  }

  const [text, setText] = useState('0');
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
  return (
    
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
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

                
                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.button1} onPress={save}
                        >
                            <Text style={styles.buttonText1}>Ajouter une commande</Text>
                    </TouchableOpacity>

                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </>
  );
}
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
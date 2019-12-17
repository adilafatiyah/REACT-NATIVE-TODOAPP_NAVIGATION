
import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Picker, ScrollView} from 'react-native'

class AddTodo extends React.Component{
  state = {
    nama:'',
    nomer:'',
    keterangan:'',
    todo:[] 
  }
  tambahTodo = () =>{
    var newTodo ={
      nama:this.state.nama,
      nomer:this.state.nomer,
      keterangan:this.state.keterangan
    }
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr, nama:'', nomer:'', keterangan:''})
  }
  render(){
  return(
    <View style={styles.container} >
      <ScrollView>
      <View style={styles.innerStyle}>
         <TextInput style={styles.inputBox}
            value={this.state.nama}
            onChangeText={(nama)=>this.setState({nama})}
            underlineColorAndroid='#7f0000'
            placeholder="Nama"
            placeholderTextColor = "#7f0000"
        />
        <TextInput style={styles.inputBox}
            value={this.state.nomer}
            keyboardType='phone-pad'
            onChangeText={(nomer)=>this.setState({nomer})}
            underlineColorAndroid='#7f0000'
            placeholder="Nomor"
            placeholderTextColor = "#7f0000"
        /> 
        <TextInput style={styles.inputBox}
            value={this.state.keterangan}
            onChangeText={(keterangan)=>this.setState({keterangan})}
            underlineColorAndroid='#7f0000'
            placeholder="Keterangan"
            placeholderTextColor = "#7f0000"
        />             
        <Button style={styles.button} onPress={this.tambahTodo} title="Simpan Contact" />
      </View>
      </ScrollView>
    </View>
  )
}}

export default AddTodo;
const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:"#fff",
   justifyContent:"center",
   alignItems:"center",
},
innerStyle:{
  fontSize:20,
},
textStyle:{
  fontSize:30,
  color:'red'
},
inputBox: {
    width:300,
    backgroundColor:'#ffffff',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#7f0000',
    marginVertical: 10
    },
button: {
    width:300,
    backgroundColor:'#7f0000',
    color:'#7f0000',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
    },
})
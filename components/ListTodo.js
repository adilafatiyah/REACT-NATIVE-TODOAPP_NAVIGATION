import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ActionButton from 'react-native-action-button';

class ListTodo extends React.Component{
    state = {
        nama:'',
        nomer:'',
        keterangan:'',
        todo:[]
      }
      tampilTodos=()=>{
        return this.state.todo.map(t=>{
          return(
            <TouchableOpacity key={t.nama} onPress={()=>this.hapusTodo(t)}>
              <Text>Nama: {t.nama} </Text>
              <Text>Nomer: {t.nomer}</Text>
              <Text>Keterangan: {t.keterangan}</Text>
            </TouchableOpacity>
          );
        });
      }
      hapusTodo =(t)=>{
        var arr = this.state.todo
        var pos = arr.indexOf(t);
        arr.splice(pos,1);
        this.setState({todo:arr});
      }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#f3f3f3'}}>
                <View style={{marginTop:40, alignItem:'center', justifyContent:'center'}}>
                    {this.tampilTodos()}
                </View>
                 <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => this.props.navigation.navigate('AddScreen')}
                    />
            </View>
        )
    }
}
export default ListTodo;
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
inputStyle:{
  height:40,
  width:240,
  borderColor:'blue',
  borderWidth:1,
  marginBottom:2
}

})
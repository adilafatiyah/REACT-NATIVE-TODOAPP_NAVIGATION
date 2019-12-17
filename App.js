import React, { Component } from 'react';
//1. Impor ini
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
 
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import ListTodo from './components/ListTodo';
 
 
//2. Buat Navigator
const AppNavigator = createStackNavigator(
 {
 AddScreen: {
   screen: AddTodo,
 },
 EditScreen: {
   screen: EditTodo,
 },
 ListScreen: {
  screen: ListTodo,
}
},{
 initialRouteName : 'ListScreen',
 defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
 
}); 

//3.Create App Container
const AppContainer = createAppContainer(AppNavigator);
 
export default class App extends Component {
  constructor(){
    super();
  }
 
 render() {
   return (
     <AppContainer />
   );
 }
};





import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BookPage from './src/Pages/BookPage';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from './src/Pages/BookDetails';


function App(){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Lista de Livros" component={BookPage} options = {style}/> 
      <Stack.Screen name="BookDetails" component={BookDetails} options = {({route})=>{
        const titlePage = route.params.person.Título;

        return({
            title: titlePage,
            headerStyle: style.headerStyle,
            headerTitleStyle: style.headerTitleStyle
        });


      }}/>      
    </Stack.Navigator>

    </NavigationContainer>
  );
}

const style = {
  headerStyle:{
    backgroundColor: '#5ced83',
    
  },
  headerTitleStyle:{
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  }
}

export default App;
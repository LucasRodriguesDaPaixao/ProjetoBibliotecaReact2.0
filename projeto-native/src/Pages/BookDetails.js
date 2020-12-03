import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DataLine from '../Components/DataLine';

function BookDetails({route}){
  const {person} = route.params;

  return(

    <View style={styles.container}>    
     
      <DataLine label="Autor: " data={person.Autor}/>            
      <DataLine label="Editora: " data={person.Publicadora}/>
      <DataLine label="Preço: " data={person.Preco}/>
      <DataLine label="Categoria: " data={person.Gênero}/>

    </View> 
  ); 


}

const styles = StyleSheet.create({
  photo:{
    aspectRatio: 1,
  },
  container:{
    padding: 10,

  }
 
});


export default BookDetails;
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

function BookList({book, navigation}){
    if(book.length !== 0){
        const textElements = book.map((person) => {
            const {Autor, Título} = person;
          return (
            <TouchableHighlight onPress={()=> {
              navigation.navigate("BookDetails", {person});
            }} key={Autor}>
              <View style={styles.container}>                  
                  <Text style={styles.text}>{`${Título}`}</Text>
              </View>
            </TouchableHighlight>
          )
      });
  
      return (
          <View>
              {textElements}
          </View>        
      );
    }  

    return (
      <Text style={styles.loading}>
        Carregando os dados...Aguarde por favor!
      </Text>
    )
}

const styles = StyleSheet.create({
    photo: {       
        aspectRatio: 1,
        marginLeft: 20,
        borderRadius: 30,
        flex: 1,

    },
    container: {
        backgroundColor: '#E2F9FF',
        height: 80,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
    },
    text: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 5,
    },
    loading: {
      fontSize: 20,
      color: '#F00',
  }

});

export default BookList;
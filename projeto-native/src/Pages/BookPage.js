import React, {useEffect, useState} from 'react';
import { ScrollView, View } from 'react-native';

import Header from '../Components/Header';
import axios from 'axios';
import BookList from '../Components/BookList';

export default function BookPage(props) {

    const {navigation} = props;

  const [book, setBook] = useState([]);

    useEffect(() => {
      axios          
          .get('http://192.168.0.106:3333/book')
          .then(resposta => {
            setBook(resposta.data)
            console.log(resposta)
          }).catch(error => {
            console.log('Ocorreu um erro - ' + error);
          });

    }, []);

    
    return (
      <ScrollView>
        <View>            
            <BookList book={book} navigation={navigation}/>
        </View>
      </ScrollView>
    );
}

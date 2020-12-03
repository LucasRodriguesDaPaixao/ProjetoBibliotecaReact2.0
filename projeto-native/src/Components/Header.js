import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function Header({title}){
    return(
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>      
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#5ced83',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        color: '#fff',
        padding: 10,
    }   

});

export default Header;
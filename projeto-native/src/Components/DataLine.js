import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DataLine(props){
    return (
        <View style={styles.line}>     
            <Text>{props.label}</Text>
            <Text>{props.data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line:{
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: '#c5c5c5',
    },
  });


export default DataLine;
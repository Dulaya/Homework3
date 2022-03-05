import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {

  /*
  Create Box components (name Box), one property name="variation". 
  4 options: do same as last homework yellow. 
  If no variation is defined, generic.
  */

  const Box = prop => {

    let tempStyle = '';

    if (prop.variation == 'variation1' || prop.variation == 'variation2' || prop.variation == 'variation3' || prop.variation == 'variation4') {
      tempStyle = prop.variation;
    } else tempStyle = 'default';

    return(
      <View style={[styles.default, styles[tempStyle]]}>
        <Text style={styles.textFormat}>
          {prop.variation}
        </Text>
      </View>
    )
  
    };


  return (
    <SafeAreaView>
      <ScrollView >
        <Box variation="variation1" />
        <Box variation="variation2" />
        <Box variation="variation3" />
        <Box variation="variation4" />
        <Box variation="default" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  textFormat: {
    fontSize: 20,
    textAlign: 'center',
  },

  default: {
    backgroundColor: 'yellow',
    borderColor: 'green',
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    margin: 25,
  },

  variation1: {
    borderWidth: 5,
  },

  variation2: {
   borderStyle: 'dashed',
  },

  variation3: {
    borderColor: 'red',
    borderWidth: 7,
  },

  variation4: {
    borderColor: '#00B4D8',
    borderStyle: 'dotted',
  }

});
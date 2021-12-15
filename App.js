import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Box from './src/components/Box';
import Game from './src/components/Game';

const Stack = createNativeStackNavigator();


//Kotisivun navigaatio
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Button 
        title='Info'
        onPress={() =>
          navigation.navigate('Info')
        }
        color='red'
        />
      </View>
      <Text></Text>
      <Button
          title='Aloita Peli'
          onPress={() => 
            navigation.navigate('Game')
          }
          color='black'
        />
    <Box />
    
    </View>
  );
};

//Pelin haku 
const getGame = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
};
//Inffosivu
const getInfo = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Varoitus!</Text>
      <Text style={styles.text}>Muista aina juoda vastuuntuntoisesti.
        Pelaamalla peliä hyväksyt että olet itse vastuussa mahdollisista seurauksista, joita Kunkkukupin pelaaminen voi aiheuttaa.
      </Text>

    </View>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator title='takaisin'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Tervetuloa Kunkkukuppi juomapeliin' }}
          backgroundColor='brown'
        />
        <Stack.Screen name="Game" component={getGame} />
        <Stack.Screen name="Info" component={getInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#006400',
      borderColor: '#8b4513',
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    text: {
      color: 'white',

    }
});
export default App;
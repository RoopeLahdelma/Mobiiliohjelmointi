import * as React from 'react';
import { PanResponder, Animated, Button, StyleSheet, Text, Alert, View, ImageBackground } from 'react-native';



const image1 = { uri: "http://deckofcardsapi.com/static/img/KH.png" };

export default class Boxes extends React.Component {
    
    pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ],{useNativeDriver: false}),

    onPanResponderRelease: () => {
      Animated.spring(this.pan, { 
        toValue: { x: 0, y: 0 }, 
        useNativeDriver: true
      }).start();
    }
  });
    render() {
      return(
        
        <View style={styles.container}>
            <Text style={styles.text}>Koita koskea korttiin!</Text>
            <Animated.View style={{  transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }] }}  {...this.panResponder.panHandlers} >
                <View style={styles.box} >
                    <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
                        <Text style={styles.text}>
                            
                        </Text>
                    </ImageBackground>
                </View>
                
            </Animated.View>
            
      </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '200%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderColor: '#8b4513',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
      titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold'
      },
      box: {
        height: 350,
        width: 250,
        backgroundColor: 'black',
        borderRadius: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
        
      },
      image: {
        flex: 1,
        justifyContent: 'center'
      },
      image2: {
        flex: 1,
        justifyContent: 'center'
      },
      text: {
          textAlign: 'center',
          color: 'white'
          
      },
  
});
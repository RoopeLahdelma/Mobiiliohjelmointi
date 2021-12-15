import * as React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Game() {

    const [id, setId] = React.useState(' ');
    const [data, setData] = React.useState('');
    const [count, setCount] = React.useState('');
    const [value, setValue] = React.useState(' ');
  
    //Uuden Korttipakan luominen
    const getDeck = async () => {
    
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const json = await response.json();
      setId(json.deck_id);
        console.log(json)

      
      const response2 = await fetch('https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=1');
      const json2 = await response2.json();
      setData(json2.cards);

      setValue(json2.cards[0].value)
     
      setCount(json.remaining);
        
    
    }
 
    //Uuden kortin vetäminen pakasta
    const getNewCard = async () => {

        const response = await fetch('https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=1');
        const json = await response.json();
        setData(json.cards);
        setCount(json.remaining);
        setValue(json.cards[0].value)
    }



    //Luodaan arvo jokaiselle kortille
    const [cardValue, setcardValue] = React.useState('');

    const GetCardValues = (props) => {
        if (props == 'ACE') {
            setcardValue("Vesiputous")
        }
        else if (props == '2') {
            setcardValue("Sinä juot kaksi")
        }
        else if (props == '3') {
            setcardValue("Kolme itselle")
        }
        else if (props == '4') {    
                setcardValue("Maahan")
        }
        else if (props == '5') {  
                setcardValue("Miehet juovat")   
        }
        else if (props == '6') {   
                setcardValue("Naiset juovat")   
        }
        else if (props == '7') {
            setcardValue("Kurota taivaaseen")
        }
        else if (props == '8') {
            setcardValue("Valitse itsellesi toveri")
        }
        else if (props == '9') {
            setcardValue("Sääntökortti")
        }
        else if (props == '10') {
            setcardValue("Laiva on lastattu")
        }
        else if (props == 'JACK') {
            setcardValue("Totuus tai tehtävä")
        }
        else if (props == 'QUEEN') {
            setcardValue("2 Totuutta 1 Valhe")
        }
        else if (props == 'KING') {
            setcardValue("En ole koskaan")
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => {getDeck(); GetCardValues()}}
            title='Jaa kortit'
            color='black'
            >
            </Button>
            
            
            <FlatList data={data} renderItem=
                {({ item }) =>
                    <View>
                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>Jäljellä olevat kortit {count}</Text>
                        <View>
                        <Image source={{ uri: item.image }} style={styles.Cardpng} />
                        <Button  
                        title="Seuraava Kortti" 
                        color='red'
                        onPress onPress={() => { getNewCard(); GetCardValues()}}
                        >
                        </Button>
                        </View>
                        <Text> </Text>


                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>{cardValue}</Text>
                        
                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>{GetCardValues(item.value)}</Text>
                        
                        <Text></Text>

                    </View>}
                keyExtractor={(_, index) => index.toString()
                }
            />


        </SafeAreaView>
    );


}
const styles = StyleSheet.create({
        container: {
            height: 350,
            width: 250,
            flex: 1,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
        },

        Cardpng: {
            width: 260,
            height: 360,
        }
    });
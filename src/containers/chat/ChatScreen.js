import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableHighlight, Image} from 'react-native';

function ChatScreen({navigation})
{
  
  const [headlines, setHeadlines] = useState({});
  const url = `http://localhost:8080/matching/matchList?username=volkan`; // TODO: test amaçl¹
  

  // const customData = require('./customData.json');
 
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res.matchingList))
  }
  function renderItem({ item }) {
    return (
      
    <TouchableHighlight onPress={() => { 
  
      navigation.navigate('ChatDetail');
      
      }}>
      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 30, padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
       
       <View>
         <Image style={{ width: 90, height: 90, borderRadius: 50}} source={require('../../asset/defaultuser.png')}/>
       </View>

        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text 
            style={{ padding:5,
            fontSize: 18,
            fontWeight: "bold",  
            textAlign: 'left', 
            fontWeight: 'bold',
            marginTop: 5,
            width: 200,
            color: "#4CB6ED"
            }}>{item.username}</Text>

            <Text 
            style={{ padding:5,
            fontSize: 13, 
            textAlign: 'left', 
            fontWeight: 'bold',
            marginTop: 5,
            width: 200,
            color: "#4CB6ED"
            }}>Sana ulasamiyorum cevap verebilir misin artik???</Text>

        </View>
        <View style={{ paddingLeft: 10 }}>
        <Text 
            style={{ padding:5,
            fontSize: 12, 
            textAlign: 'right', 

            marginTop: 5,
            width: 200,
            color: "#4CB6ED"
            }}>12:00</Text>

        </View>
      </View>
      </TouchableHighlight>
      );
  }
 
  return (
 
    <View>
    <FlatList
      data={headlines}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  </View>
  );

}

export default ChatScreen;

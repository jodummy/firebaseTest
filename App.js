import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { setTimeout } from 'core-js';



export default class App extends React.Component {

  state = {
    email: '',
    name: '',
    password: '',
  }

  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDE01SRVB6g99NCtlYfhgpW-3Ctc4PZdpg",
      authDomain: "reactnativedatabase-e3164.firebaseapp.com",
      databaseURL: "https://reactnativedatabase-e3164.firebaseio.com",
      projectId: "reactnativedatabase-e3164",
      storageBucket: "reactnativedatabase-e3164.appspot.com",
      messagingSenderId: "5654389138",
      appId: "1:5654389138:web:91ada309162d79ce"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    //데이터베이스 json
    /*  firebase.database().ref('users').on('value', (data) => {
       console.log(data.toJSON());
     }) */


    //데이터베이스 insert 방법


    /* setTimeout(() => {
      firebase.database().ref('users/004').set(
        {
          name: '444  Pheng Sengvuthy004',
          age: 44424
        }
      ).then(() => {
        console.log('inserted !');
      }).catch((error) => {
        console.log(error);
      });
    },5000);
 */

    //데이터베이스 updata 방법
    /*  firebase.database().ref('users/004').update({
       name: 'Pheng Sengvuthy',
     }); */

    /*  firebase.database().ref('users/003').remove(); */
  }

  userWrite(email, name ,password ) {
    firebase.database().ref('Users/').set({
      email,
      name,
      password
    }).then((data) => {
      //success callback
      console.log('data ', data)
    }).catch((error) => {
      //error callback
      console.log('error ', error)
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

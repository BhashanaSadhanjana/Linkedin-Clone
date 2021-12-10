/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {SliderBox} from 'react-native-image-slider-box';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '327950610795-ooaf8s1bkv8d0ibeckgq66buun1eemqn.apps.googleusercontent.com',
    });
  }
  async onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../Clone/assets/images/Home-logo.png'),
        require('../../Clone/assets/images/slider-logo.png'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          // style={{top: 20, paddingVertical: 400, marginVertical: 1}}
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={750}
          paginationBoxVerticalPadding={210}
          resizeMode="contain"
          inactiveDotColor="#90A4AE"
        />
        {/* <Image
          style={{width: '99%', height: 350, bottom: 10}}
          source={require('./assets/images/Home-logo.png')}
          resizeMode="contain"
        /> */}

        {/* <Image
          style={{width: 90, height: 50, bottom: 410, right: 130}}
          source={require('./assets/images/Linkedin-Logo.png')}
          resizeMode="contain"
        /> */}
        <Image
          style={{width: 75, height: 50, bottom: 590, right: 130}}
          source={require('./assets/images/Linkedin-Logo.png')}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
            bottom: 210,
          }}>
          Build your network on the go
        </Text>

        <View
          style={{
            flexDirection: 'column',
            margin: '0.2%',
            paddingVertical: 1,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#3949ab',
            padding: 12,
            width: 220,
            borderRadius: 30,
            marginHorizontal: 2,
            bottom: 150,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fafafa',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Join now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.onGoogleButtonPress().then(() =>
              this.props.navigation.navigate('Profile'),
            )
          }
          style={{
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 3,
            padding: 10,
            width: 220,
            height: 50,
            borderRadius: 30,
            marginHorizontal: 3,
            marginVertical: 10,
            bottom: 150,
          }}>
          <Image
            style={{width: 20, height: 20, top: 1, left: 10}}
            source={require('./assets/images/Google-logo.png')}
            resizeMode="contain"
          />
          <Text
            style={{
              textAlign: 'center',
              color: '#757575',
              fontSize: 18,
              fontWeight: 'bold',
              bottom: 20,
              left: 7,
            }}>
            Join with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 12,
            width: 220,
            borderRadius: 30,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#5c6bc0',
              fontSize: 18,
              fontWeight: 'bold',
              bottom: 130,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
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

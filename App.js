import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, Image, TouchableOpacity, ImageBackground, View } from 'react-native';
import { 
  ApplicationProvider, 
  Layout, 
  Text, 
  Button,
  BottomNavigationTab,
  Icon,
  IconRegistry,
  Autocomplete,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const image = { uri: 'https://i.imgur.com/VVYCHP4.jpg' }

const HomeScreen = () =>  (
  <Layout style={styles.container}>

      <ImageBackground 
        source={image}
        style={styles.backgroundImage}
      >
    <View style={styles.waveContainer}>
      <Image 
        style={ styles.waves }
        source={require("./assets/wave-haikei.png")}
      />
      <Button size="giant" status='warning' style={styles.button}>
        Start Learning
      </Button>
      <Button size="giant" appearance='ghost' status='basic' style={styles.buttonSignIn}>
        I ALREADY HAVE AN ACCOUNT
      </Button>
      <Text style={styles.text}>Start learning to code.</Text>
    </View>
      
    </ImageBackground>
  </Layout>
);

const StarIcon = (props) => <Icon {...props} name="star" />;

export const BottomNavigationTabSimplecase = () => (
  <BottomNavigationTab title="USERS" icon={StarIcon} />
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
     <HomeScreen />
    </ApplicationProvider>
  </>

);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    zIndex: 1
  },
  button: {
    //backgroundColor: "green",
    borderRadius: 40,
    position: "absolute",
    bottom: 210,
    borderColor: "transparent"
  },
  waves: {
    // flex: 1,
    // resizeMode: "stretch",
    // justifyContent: "flex-start"
  },
  waveContainer:{
    //flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    bottom: -220,

  },

})
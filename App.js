import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
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


const StarIcon = (props) => <Icon {...props} name="star" />;

export const BottomNavigationTabSimplecase = () => (
  <BottomNavigationTab title="USERS" icon={StarIcon} />
);


const HomeScreen = () => {
  const [counter, setCounter] = React.useState(0);
  return (
  <Layout style={styles.container}>

    <TouchableOpacity>
      <Image 
        source={{
          width: 450,
          height: 500,
          uri: 'https://i.imgur.com/lZfagoB.jpg',
        }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText} category={'h1'}>
      React Native
      </Text>

      <Text style={styles.paragraphText}>
      Pressed {counter} times
      </Text>

    <Button onPress={() => setCounter(counter + 1)}>Become a programmer!</Button>

    <BottomNavigationTabSimplecase/>
    
  </Layout>
)};



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
    justifyContent: 'center', 
     alignItems: 'center',
     marginTop: 'auto',
  },
  headerText: {
    marginBottom: 16,
  },
  paragraphText: {
    marginBottom: 16,
  }
})
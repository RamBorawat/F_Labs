/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, createContext, useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Homescreen from './screens/Homescreen';
import { LogBox } from "react-native"
import CartPage from './screens/CartPage';
import PaymentPage from './screens/PaymentPage';
import BarcodeScanners from './screens/BarcodeScanners';
import { constants } from './Constant';

LogBox.ignoreAllLogs(true)
const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
export const AppContext = createContext();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([{ name: 'ram' }, { name: 'ram' }])
  const [boughtData, setBoughtData] = useState([])
  const [payment, setPayment] = useState(0)

  const [login, setLogin] = useState(false)

  async function apiCall() {

    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    setData(data);
    console.log('seeing data')
    console.log(data,);
  }

  useEffect(() => {
    console.log('useeffect run');
    apiCall()
  }, [])
  const backgroundStyle = {
    backgroundColor: isDarkMode ?
      Colors.lighter
      :
      Colors.darker
  };
  console.log(login);
  const setBoughtDataForCart = (value) => setBoughtData(prev => [...prev, value])
  const setSecureLogin = (value) => setLogin(value)
  const setPaymentValue = (value) => {
    console.log(value);
    setPayment(value)
  }



  const Stack = createNativeStackNavigator();
  return (
    <AppContext.Provider value={{
      data,
      boughtData,
      login,
      payment,
      setBoughtDataForCart,
      setSecureLogin,
      setPaymentValue,

    }}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name={constants.home} component={Homescreen} />
          <Stack.Screen name={constants.barcode} component={BarcodeScanners} />
          <Stack.Screen name={constants.cart} component={CartPage} />
          {login ?
            <Stack.Screen name={constants.payment} component={PaymentPage} />
            :
            null
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

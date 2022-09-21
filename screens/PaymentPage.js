import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppContext } from '../App';

const PaymentPage = () => {
    const { payment } = useContext(AppContext);
    return (
        <View>
            <Text>Payment page</Text>
            {login && <Text>Total Payment to be made is {payment}</Text>}

        </View>
    );
}

const styles = StyleSheet.create({})

export default PaymentPage;

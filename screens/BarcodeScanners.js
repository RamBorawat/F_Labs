import React, { useContext } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { AppContext } from '../App';
import BarcodeScanner from 'react-native-scan-barcode';

const BarcodeScanners = () => {
    const { boughtData } = useContext(AppContext);
    const barcodeReceived = (val) => {
        // console.log(val);
        boughtData.map((x) => {
            if (x === val) {
                Alert.alert('item is available in bought section')
            } else {
                Alert.alert('item is not available')

            }
        })
    }
    return (
        <View style={{ flex: 1 }}>
            <Text> Barcode Scanner using Camera</Text>
            <BarcodeScanner
                onBarCodeRead={barcodeReceived}
                style={{ flex: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default BarcodeScanners;

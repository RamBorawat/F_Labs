import React, { useState, useEffect, useReducer, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Modal, AsyncStorage, Button, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../App';
import { constants } from '../Constant';

export default function Homescreen({ navigation }) {

    const { data, setBoughtDataForCart, boughtData } = useContext(AppContext);
    // console.log(data);
    // const ItemView = (val) => {
    //     return <View style={{
    //         width: '100%',
    //         height: 90
    //     }}>

    //         <Text>{val.name}</Text>
    //         <Button title='add to cart'
    //             onPress={() => {
    //                 console.log(val.id, 'added');

    //             }} />
    //     </View>

    // }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* {data.map((x) => {
                console.log(x, 'from item map')


            })} */}
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    // console.log(item, index, 'this is the data flatlist');

                    // { "address": {"city": "Roscoeview", "geo": {"lat": "-31.8129", "lng": "62.5342"}, "street": "Skiles Walks", "suite": "Suite 351", "zipcode": "33263"}, "company": {"bs": "revolutionize end-to-end systems", "catchPhrase": "User-centric fault-tolerant solution", "name": "Keebler LLC"}, "email": "Lucio_Hettinger@annie.ca", "id": 5, "name": "Chelsey Dietrich", "phone": "(254)954-1289", "username": "Kamren", "website": "demarco.info"}
                    return <View style={{
                        width: '100%',
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'

                    }}>

                        <TouchableOpacity
                            style={{ width: '70%', height: 50, }}
                            onPress={() => {
                                // console.log(item)
                            }}>

                            <Text style={{ color: '#000', width: '100%', }}>{item.name}</Text>
                            {/* <Button title='add to cart'
                            onPress={() => {
                                console.log(val, 'added');
                                setBoughtDataForCart(val)
                                
                            }} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '30%', height: 50, }}
                            onPress={() => {
                                console.log(item.id)
                                setBoughtDataForCart(item.id)
                                console.log(boughtData);
                            }}>
                            <Text style={styles.textStyle}>add to cart</Text>
                        </TouchableOpacity>
                    </View>

                }}

            />

            <Button title='View Cart'
                onPress={() => {
                    console.log('moving to cart');
                    navigation.navigate(constants.cart)
                }}
            />
            {/* Map all items give a button to add to cart */}

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    textStyle: { color: '#000', width: '100%', borderWidth: 1, borderColor: 'yellow', backgroundColor: 'orange', padding: 10 }
})
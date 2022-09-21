import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Button, Animated } from 'react-native';
import { AppContext } from '../App';
import { constants } from '../Constant';


const CartPage = ({ navigation }) => {
    const { boughtData, setPaymentValue } = useContext(AppContext);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Show all added item  and total the amouont 
    let val = [1, 2, 3, 4, 5]
    const [total, setTotal] = useState(0)
    let getTotal = (val) => {
        console.log('taking index and adding them as price', val);
        setTotal(val.reduce((tot, curr) => {
            return tot + curr
        }, 0))
    }

    useEffect(() => {
        getTotal(boughtData);


    }, []);
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 100,
                duration: 5000,

            }
        ).start();
    }, [fadeAnim])

    return (
        <View style={{
            flex: 1, justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View
                style={[

                    {
                        // opacity: fadeAnim,
                        transform: [

                            // { rotateY: "55deg" },
                            // { rotateZ: "45deg" },
                            { translateX: fadeAnim }
                        ]

                    }
                ]}
            >
                <Text style={styles.fadingText}>Animations to rotate 45</Text>
            </Animated.View>

            <Text> cart page</Text>
            <Text>
                you ordered this {boughtData.map((x) => {
                    return ' ' + x
                })}
            </Text>

            <Text>
                your total is {total}
            </Text>
            <Button title={'Enable Secure Login '}
                onPress={() => {
                    setPaymentValue(true)

                }}
            />
            <Button title={'Disable Secure Login '}
                onPress={() => setPaymentValue(false)}
            />
            <Button title={'Move to payment '}
                onPress={() => navigation.navigate(constants.barcode)}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CartPage;

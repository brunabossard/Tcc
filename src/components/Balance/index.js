import React from "react";
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

export default function Balance({saldo, gastos}) {
    return (
        <View StyleSheet={styles.container}>
            <View StyleSheet={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>
                        {saldo}
                 </Text>
                </View>
            </View>


            <View StyleSheet={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expense}>
                        {gastos}
                        </Text>
                </View>

            </View>


        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex:99,
    },
    itemTitle:{
        fontSize:20,
        color:'#DADADA'
    },
    content:{
        flexDirection: 'row',
        alignItems:'center'
    },
    currencySymbol:{
        color:'#DADADA',
        marginRight:6 
    },
    balance:{
        fontSize:22,
        color:'#2ecc71'
    },
    expense:{
        fontSize:22,
        color:'#e74c3c'
    }



    })
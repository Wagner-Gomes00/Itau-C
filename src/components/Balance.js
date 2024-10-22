import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Balance({ saldo }) {
    return (
        <View style={styles.balanceContainer}>
            <View style={styles.balanceHeader}>
                <Icon name="logo-ionic" size={30} color="#0066cc" />
                <Text style={styles.balanceTitle}>Saldo em conta</Text>
            </View>
            <Text style={styles.balanceAmount}>R$ {saldo.toFixed(2)}</Text>
            <TouchableOpacity>
                <Text style={styles.balanceLink}>Acessar extrato</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    balanceContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    balanceHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceTitle: {
        fontSize: 16,
        marginLeft: 10,
        color: '#000',
    },
    balanceAmount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 10,
    },
    balanceLink: {
        color: '#0066cc',
        fontSize: 16,
    },
});

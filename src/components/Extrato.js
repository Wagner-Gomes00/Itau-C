import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Extrato({ extrato }) {
    const renderItem = ({ item }) => (
        <View style={styles.extratoItem}>
            <Text>Transação {item.id}</Text>
            <Text>Valor: R$ {item.valor.toFixed(2)}</Text>
            
        </View>
    );

    return (
        <View style={styles.extratoContainer}>
            <Text style={styles.extratoTitle}>Extrato</Text>
            {extrato.length > 0 ? (
                <FlatList
                    data={extrato}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            ) : (
                <Text>Sem transações até o momento.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    extratoContainer: {
        padding: 20,
    },
    extratoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    extratoItem: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 5 },
        elevation: 3,
    },
});

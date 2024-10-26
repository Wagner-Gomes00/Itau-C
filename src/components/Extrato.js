import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Extrato({ extrato }) {
    const renderItem = ({ item }) => (
        <View style={styles.extratoItem}>
            <Text style={styles.transacaoId}>Transação {item.id}</Text>
            <Text style={styles.transacaoValor}>Valor: R$ {item.valor.toFixed(2)}</Text>
            <Text style={styles.transacaoData}>Data: {item.data}</Text>
            <Text style={styles.transacaoHora}>Hora: {item.hora}</Text>
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
    transacaoId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    transacaoValor: {
        fontSize: 16,
        color: '#0066cc',
        marginBottom: 2,
    },
    transacaoData: {
        fontSize: 14,
        color: '#666',
    },
    transacaoHora: {
        fontSize: 14,
        color: '#666',
    },
});

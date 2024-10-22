import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function PixScreen({ route, navigation }) {
    const { saldo, setSaldo, extrato, setExtrato } = route.params; 

    const [valorPix, setValorPix] = useState('');

    const handlePix = () => {
        const valor = parseFloat(valorPix);
        if (valor > 0 && valor <= saldo) {
            setSaldo(saldo - valor);
            setExtrato([...extrato, { id: extrato.length + 1, valor }]);
            navigation.goBack(); 
        } else {
            alert('Valor inválido ou saldo insuficiente');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo disponível: R$ {saldo.toFixed(2)}</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Digite o valor do Pix"
                value={valorPix}
                onChangeText={setValorPix}
            />
            <TouchableOpacity style={styles.button} onPress={handlePix}>
                <Text style={styles.buttonText}>Enviar Pix</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

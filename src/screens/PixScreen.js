import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../components/ThemeContext';

export default function PixScreen({ route, navigation }) {
    const { saldo, setSaldo, extrato, setExtrato } = route.params;
    const [valorPix, setValorPix] = useState('');
    const { darkTheme, toggleTheme } = useContext(ThemeContext);

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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            backgroundColor: darkTheme ? '#333' : '#f2f2f2',
        },
        themeButton: {
            position: 'absolute',
            top: 10,
            right: 20,
            backgroundColor: darkTheme ? '#555' : '#ddd',
            padding: 10,
            borderRadius: 20,
        },
        label: {
            fontSize: 18,
            color: darkTheme ? '#fff' : '#000',
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

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
                <Icon name={darkTheme ? "sunny-outline" : "moon-outline"} size={24} color={darkTheme ? '#ffd700' : '#333'} />
            </TouchableOpacity>

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

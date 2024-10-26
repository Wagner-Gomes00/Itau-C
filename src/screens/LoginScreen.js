import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [senha, setSenha] = useState('');
    const senhaCorreta = '000000';//senha
    const navigation = useNavigation();

    const handlePressNumero = (valor) => {
        if (senha.length < 6) {
            setSenha(senha + valor);
        }
    };

    const handleApagar = () => {
        setSenha(senha.slice(0, -1));
    };

    const handleContinuar = () => {
        if (senha === senhaCorreta) {
            navigation.navigate('SecondScreen'); 
        } else {
            Alert.alert('Erro', 'Senha incorreta. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Digite a senha de acesso</Text>

            
            <View style={styles.senhaContainer}>
                {Array(6).fill().map((_, index) => (
                    <View key={index} style={styles.senhaBox}>
                        <Text style={styles.senhaText}>{senha[index] || ''}</Text>
                    </View>
                ))}
            </View>

            
            <View style={styles.numerosContainer}>
                {[
                    ['6 ou 9', '6', '9'],
                    ['5 ou 8', '5', '8'],
                    ['4 ou 7', '4', '7'],
                    ['1 ou 2', '1', '2'],
                    ['0 ou 3', '0', '3'],
                    ['Apagar', 'X', handleApagar]
                ].map(([label, valor1, valor2]) => (
                    <TouchableOpacity
                        key={label}
                        style={styles.botaoNumerico}
                        onPress={() => (label === 'Apagar' ? handleApagar() : handlePressNumero(valor1))}
                    >
                        <Text style={styles.botaoText}>{label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

           
            <TouchableOpacity
                style={[styles.botaoContinuar, { backgroundColor: senha.length === 6 ? '#229a00' : '#ccc' }]}
                disabled={senha.length !== 6}
                onPress={handleContinuar}
            >
                <Text style={styles.botaoTextContinuar}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f6f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    senhaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    senhaBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    senhaText: {
        fontSize: 24,
    },
    numerosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    botaoContainer: {
        width: '30%',
        marginBottom: 15,
    },
    botaoNumerico: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    botaoText: {
        fontSize: 18,
    },
    botaoContinuar: {
        backgroundColor: '#FFA500',
        paddingVertical: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTextContinuar: {
        color: '#fff',
        fontSize: 18,
    },
    botaoEsqueciSenha: {
        marginTop: 20,
        borderColor: '#FFA500',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoEsqueciText: {
        color: '#FFA500',
        fontSize: 16,
    },
});

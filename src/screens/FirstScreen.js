import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const { width } = Dimensions.get('window');

export default function FirstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Olá, Wagner</Text>
                <Text style={styles.accountInfo}>Agência ••77 Conta ••77-7</Text>
            </View>

            <TouchableOpacity
                style={styles.accessButton}
                onPress={() => navigation.navigate('SecondScreen')}
            >
                <Icon name="lock-closed-outline" size={30} color="#0066cc" />
                <Text style={styles.accessButtonText}>Acessar</Text>
            </TouchableOpacity>

            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="swap-horizontal-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>Pix e transferir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="barcode-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>Pagar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="document-text-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>Extrato</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="card-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>Cartões</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="grid-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>Área Pix</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="key-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>iToken</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Icon name="help-circle-outline" size={30} color="#0066cc" />
                    <Text style={styles.optionText}>Ajuda</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        marginBottom: 20,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    accountInfo: {
        fontSize: 16,
        color: '#6c757d',
        marginTop: 5,
    },
    accessButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    accessButtonText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    optionBox: {
        width: (width / 2) - 30,
        backgroundColor: '#fff',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    optionText: {
        marginTop: 10,
        fontSize: 14,
        color: '#000',
    },
});

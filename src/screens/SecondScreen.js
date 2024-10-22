import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import OptionButton from '../components/OptionButton';
import Balance from '../components/Balance';
import Extrato from '../components/Extrato';
import Footer from '../components/Footer';

export default function SecondScreen({ navigation }) {
    const [saldo, setSaldo] = useState(7500); 
    const [extrato, setExtrato] = useState([]); 

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Header />

                {/* Secção de opções - Carrossel Horizontal */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <OptionButton
                        iconName="swap-horizontal-outline"
                        label="Pix e transferir"
                        onPress={() =>
                            navigation.navigate('PixScreen', {
                                saldo,
                                setSaldo,
                                extrato,
                                setExtrato,
                            })
                        }
                    />
                    <OptionButton iconName="barcode-outline" label="Pagar" />
                    <OptionButton iconName="cash-outline" label="Crédito disponível" />
                    <OptionButton iconName="card-outline" label="Cartão virtual" />
                    <OptionButton iconName="grid-outline" label="Área Pix" />
                    <OptionButton iconName="help-circle-outline" label="Ajuda" />
                </ScrollView>

                
                <Balance saldo={saldo} />

                
                <Extrato extrato={extrato} />
            </ScrollView>

            
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollContent: {
        paddingBottom: 100, 
    },
    horizontalScroll: {
        paddingHorizontal: 20,
    },
});

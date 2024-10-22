import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerIcon}>
                <Icon name="home-outline" size={30} color="#ff6600" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Icon name="receipt-outline" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Icon name="wallet-outline" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Icon name="menu-outline" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerIcon: {
        alignItems: 'center',
    },
});

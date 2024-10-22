import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function OptionButton({ iconName, label, onPress }) {
    return (
        <TouchableOpacity style={styles.optionBox} onPress={onPress}>
            <Icon name={iconName} size={30} color="#0066cc" />
            <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    optionBox: {
        width: '48%',
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

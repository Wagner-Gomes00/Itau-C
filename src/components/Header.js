import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <Icon name="person-circle-outline" size={50} color="#fff" />
                <Text style={styles.userName}>Wagner</Text>
            </View>
            <View style={styles.headerIcons}>
                <Icon name="search-outline" size={25} color="#fff" style={styles.icon} />
                <Icon name="chatbubble-ellipses-outline" size={25} color="#fff" style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0066cc',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 10,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 20,
    },
});

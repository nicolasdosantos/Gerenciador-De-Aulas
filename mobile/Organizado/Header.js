import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function () {
    return (
        <View style={css.header}>
            <Image style={{width: 50, height: 50}} source={require('../assets/LogoCoruja.png')} />

            <FontAwesome name="user-circle-o" size={50} color="white" />
        </View>
    );
}

const css = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 35,
        marginLeft: 12,
        marginRight: 20
    }
});
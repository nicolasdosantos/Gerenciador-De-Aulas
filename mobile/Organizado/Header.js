import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome6, Entypo, Foundation } from '@expo/vector-icons';

export default function () {
    return (
        <View style={css.header}>
            <Image style={{width: 50, height: 50}} source={require('../assets/LogoCoruja.png')} />
        </View>
    );
}

const css = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        marginLeft: 12
    }
});
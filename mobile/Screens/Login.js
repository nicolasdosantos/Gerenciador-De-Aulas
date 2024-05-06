import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <Image source={require('../assets/logo.png')} style={[styles.logo, styles.inputWithLogo]} />
            </View>

            <View style={styles.section2}>
                <TextInput style={[styles.input, styles.inputWithMargin]} placeholder="E-mail:" />
                <TextInput style={[styles.input, styles.inputWithMargin]} placeholder="Senha:" secureTextEntry={true} />

                <TouchableOpacity style={[styles.button, styles.inputWithMargin]}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleRegisterPress}>
                    <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    section1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
        marginTop: 100,
    },
    section2: {
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        borderWidth: 1,
        borderColor: '#000',
    },
    inputWithMargin: {
        marginBottom: 40,
    },
    inputWithLogo: {
        marginBottom: 0,
    },
    button: {
        backgroundColor: '#8C52FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#8C52FF',
        textDecorationLine: 'underline',
        marginTop: 10,
    },
});

export default LoginScreen;

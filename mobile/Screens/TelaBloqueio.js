import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet, Pressable, Vibration } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Fontisto } from '@expo/vector-icons';

export default function TelaBloqueio({navigation}) {

    // Função para verificar a disponibilidade da biometria
    const checkBiometricSupport = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hasHardware) {
            alert('Dispositivo não possui hardware de biometria.');
            return false;
        }

        if (!isEnrolled) {
            alert('Biometria não está configurada neste dispositivo.');
            return false;
        }

        return true;
    };

    const milissegundos  = 100

    // Função para autenticar o usuário
    const authenticateUser = async () => {
        const isBiometricSupported = await checkBiometricSupport();

        if (isBiometricSupported) {
            const { success, error } = await LocalAuthentication.authenticateAsync({
                promptMessage: "Autentique-se",
                cancelLabel: "Cancelar",
                fallbackLabel: "Use senha",
            });

            if (success) {
                navigation.navigate('TelaInicial');
            } else {
                alert('Falha na autenticação');
                Vibration.vibrate(10 * milissegundos)
            }
        }
    };

    return (
        <View style={css.container}>

            <View style={css.fundo}>
                <Fontisto name="locked" style={{marginLeft: 130}} size={50} color="black" />

                <Pressable
                    style={css.botao}
                    title="Autenticar com Biometria"
                    onPress={authenticateUser}>
                    <Text style={css.texto}>Entrar com Biométrica</Text>
                </Pressable>
            </View>
        </View>
    );
}

// Estilização simples para nosso componente
const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#f2faeb'
    },

    botao: {
        backgroundColor: '#E2E4D7',
        borderRadius: 20,
        padding: 15,
        width: 300,
        marginTop: 15,
        alignItems: 'center'
    },

    texto: {
        fontSize: 20,
    },

    fundo: {
        backgroundColor: "#AFB695",
        padding: 200,
        borderBottomLeftRadius: 280,
        borderBottomRightRadius: 280,
    }
});

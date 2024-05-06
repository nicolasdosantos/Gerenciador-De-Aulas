import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';

import Header from "../Organizado/Header"

export default function Home({ navigation }) {
    const [viagens, setViagens] = useState([]);

    const adicionarViagem = (dataInicio, dataFinal) => {
        const novaViagem = { dataInicio, dataFinal };
        setViagens([...viagens, novaViagem]);
    };

    const removerViagem = (index) => {
        const novasViagens = [...viagens];
        novasViagens.splice(index, 1);
        setViagens(novasViagens);
    };



    return (
        <ScrollView style={css.container}>

            <View>
                <Header navigation={navigation} />

                <View style={css.calendarContainer}>

                    <Calendar
                        style={css.calendar}
                        onDayPress={(day) => {
                            if (!viagens.some((viagem) => viagem.dataInicio === day.dateString)) {
                                if (viagens.length === 0 || viagens[viagens.length - 1].dataFinal) {
                                    adicionarViagem(day.dateString, null);
                                } else {
                                    const novasViagens = [...viagens];
                                    novasViagens[novasViagens.length - 1].dataFinal = day.dateString;
                                    setViagens(novasViagens);
                                }
                            }
                        }}
                    />
                </View>
            </View>

            <View style={css.informacoes}>
                <Text>Olá, Fulano Cicrano</Text>
                <Text>O que você tem para hoje?</Text>
                <Text>Selecione uma data</Text>
                <Text>para começar</Text>
            </View>



            <View style={css.datesContainer}>
                {viagens.map((viagem, index) => (
                    <View key={index} style={css.viagemContainer}>
                        <Text>{`Viagem ${index + 1}: ${viagem.dataInicio} - ${viagem.dataFinal || 'Em andamento'}`}</Text>
                        <Pressable onPress={() => removerViagem(index)}>
                            <Text style={css.removerText}>Remover</Text>
                        </Pressable>
                    </View>
                ))}
            </View>

        </ScrollView>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8C52FF',
    },

    calendarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },

    calendar: {
        width: '90%',
        aspectRatio: 1,
    },

    informacoes: {
        backgroundColor: "#fff",
        marginTop: 25,
        borderRadius: 60,
        height: 500
    },










    datesContainer: {
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor:'white',
        width: '95%',
        padding: 10,
        borderRadius: 10
    },
    viagemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    removerText: {
        color: 'red',
        textDecorationLine: 'underline',
    },

});
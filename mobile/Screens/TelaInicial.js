import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';

import Header from "../Organizado/Header"
import {FontAwesome} from "@expo/vector-icons";

export default function Home({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(null); // Estado para armazenar a data selecionada

    const adicionarViagem = (dataInicio, dataFinal) => {
        setSelectedDate(dataInicio); // Define a data selecionada
    };

    const removerViagem = (index) => {
        setSelectedDate(null); // Limpa a data selecionada
    };

    return (
        <ScrollView style={css.container}>

            <View>
                <Header navigation={navigation} />

                <View style={css.calendarContainer}>

                    <Calendar
                        style={css.calendar}
                        onDayPress={(day) => {
                            if (!selectedDate) {
                                adicionarViagem(day.dateString, null);
                            } else {
                                setSelectedDate(null);
                            }
                        }}
                        markedDates={{
                            [selectedDate]: { selected: true } // Marca a data selecionada no calendário
                        }}
                    />
                </View>
            </View>

            <View style={css.informacoes}>
                <Text style={css.textoFulano}>Olá, Fulano{'\n'}Cicrano</Text>
                <Text style={css.textoFulano2}>O que você tem para hoje?</Text>

                {selectedDate ? ( // Renderiza divInformacoes apenas se houver uma data selecionada
                    <View style={css.divInformacoes}>
                        <View style={css.divLado}>
                            <Text style={{ fontSize: 40, marginTop: 30}}>Dia 1 - 5 </Text>
                            <Text style={{fontSize: 40, marginLeft: 60, marginTop: 30,}}>15:00 </Text>
                        </View>

                        <View style={css.divLado}>
                            <Text style={{ fontSize: 20}}>Curso Tal </Text>
                            <Text style={{fontSize: 20, marginLeft: 130}}>Sala Tal </Text>
                        </View>

                        <View style={css.divLado2}>
                            <Text style={{fontSize: 20,  marginLeft: 10}}>Professor: </Text>
                            <Text style={css.professores}><FontAwesome name="user-circle-o" size={30} color="black" /> Inácio </Text>
                        </View>
                    </View>
                ) : (
                    <Text style={css.textoData}>Selecione uma data {'\n'}      para começar</Text>
                )}

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
        position: 'fixed',
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
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: 500,
    },

    divInformacoes: {
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    textoFulano: {
        fontSize: 40,
        marginTop: 30,
        marginLeft: 30

    },

    textoFulano2: {
        fontSize: 20,
        marginLeft: 30,
    },

    textoData: {
        fontSize: 20,
        marginTop: 60,
        marginLeft: 95
    },

    divLado: {
        flexDirection: 'row',
    },

    divLado2: {
        alignItems: 'center',
        marginTop: 10
    },

    professores: {
        fontSize: 20,
        marginTop: 10,
        backgroundColor: '#DDD3F3',
        padding: 10,
        borderRadius: 15
    },
});
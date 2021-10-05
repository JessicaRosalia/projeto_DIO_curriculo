/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, StyleSheet, View, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/img_profile.jpg';
import Card from './components/Card';

const App = () => {
  
  function handleRedeSocial (rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.google.com.br')
        break
      case 'instagram': 
        Alert.alert('Meu Instagram','https://www.google.com.br')
        break
      case 'github':
        Alert.alert('Meu Github','https://www.google.com.br')
        break
    }
  }
  return (
   <>
    <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
            <Text style={style.nome}>JÉSSICA ROSÁLIA</Text>
          <Text style={style.funcao}>Desenvoldedora Mobile, Analista de Requisitos</Text>
          <View style={style.container_redes}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon name="instagram" size={25}/>
          </TouchableOpacity>
          </View>
        </View>

        <Card titulo={"Experiências profissionais"}>
          <Text style={style.card_content_text}>Estágio como Analista de Requisitos</Text>
          <Text style={style.card_content_text}>Conhecimento em Metodologias ágeis</Text>
        </Card>

        <Card titulo={"Formação Academica"}>
          <Text style={style.card_content_text}>Bacharelanda em Tecnologia da Informação - UFERSA</Text>
          <Text style={style.card_content_text}>Técnica em Informática para Internet - IMD</Text>
        </Card>
    </View>
   </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
    alignItems: 'center',

  },
  container_cabecalho:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 60,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,

  },
    funcao: {
      color: '#939393',
      marginBottom: 10,
  },
  container_redes:{
    marginTop: 20,
    marginBottom: 25,
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
    card_content_text:{
        color: '#939393',
        marginBottom: 7,
  },
});

export default App;

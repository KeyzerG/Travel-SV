import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native';

export default function Inicio({ navigation }) {
  const { width } = useWindowDimensions(); // Detecta el ancho de la pantalla

  const isMobile = width < 768; // Si el ancho es menor a 768px, lo tratamos como móvil

  return (
    <ImageBackground
      source={require('../assets/homesky.jpeg')}
      style={styles.background}
      resizeMode="cover" // Esto asegura que la imagen cubra toda el área del fondo
    >
      <View style={styles.overlay}>
        <Text style={[styles.title, isMobile && styles.titleMobile]}>
          ¡Bienvenidos a TravelSV!
        </Text>
        <Text style={[styles.description, isMobile && styles.descriptionMobile]}>
          Explora los destinos turísticos más asombrosos de El Salvador, desde playas paradisíacas hasta volcanes majestuosos, además descubre dónde hospedarte y disfruta de la riqueza cultural y natural que ofrece este hermoso país.
        </Text>

        <TouchableOpacity
          style={[styles.button, isMobile && styles.buttonMobile]}
          onPress={() => navigation.navigate('Destinos')}
        >
          <Text style={styles.buttonText}>Ver Destinos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isMobile && styles.buttonMobile]}
          onPress={() => navigation.navigate('Hospedajes')}
        >
          <Text style={styles.buttonText}>Ver Hospedajes</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semi-transparente para mejorar la legibilidad del texto
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  titleMobile: {
    fontSize: 22, // Ajustamos el tamaño en móviles
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#555',
  },
  descriptionMobile: {
    fontSize: 14, // Ajustamos el tamaño en móviles
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonMobile: {
    width: '80%', // Hacemos que el botón sea más ancho en móviles
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
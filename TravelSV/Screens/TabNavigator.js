import React from 'react';
import { useWindowDimensions } from 'react-native'; //Hook para detectar el tamaño de la pantalla
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Para tabs en la parte inferior
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importa Ion-icons para los iconos del Tab
import Inicio from '../Screens/Inicio';
import Destinos from '../Screens/Destinos';
import Hospedajes from '../Screens/Hospedajes';

const TopTab = createMaterialTopTabNavigator(); // Para pantallas grandes (web)
const BottomTab = createBottomTabNavigator(); // Para móviles

export default function TabNavigator() {
  const { width } = useWindowDimensions();

  // Si la pantalla es grande, usar tabs superiores
  if (width > 768) {
    return (
      <TopTab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline'; //Icono de home
            } else if (route.name === 'Destinos') {
              iconName = focused ? 'map' : 'map-outline'; //Icono de mapa
            } else if (route.name === 'Hospedajes') {
              iconName = focused ? 'bed' : 'bed-outline';//Icono de cama
            }

            // Retorna el icono según la pestaña
            return <Ionicons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#fff' },
        })}
      >
        <TopTab.Screen name="Inicio" component={Inicio} />
        <TopTab.Screen name="Destinos" component={Destinos} />
        <TopTab.Screen name="Hospedajes" component={Hospedajes} />
      </TopTab.Navigator>
    );
  } else {
    // Para pantallas pequeñas usamos tabs inferiores
    return (
      <BottomTab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline'; //Icono de home
            } else if (route.name === 'Destinos') {
              iconName = focused ? 'map' : 'map-outline'; //Icono de mapa
            } else if (route.name === 'Hospedajes') {
              iconName = focused ? 'bed' : 'bed-outline';//Icono de cama
            }

            // Retorna el icono según la pestaña
            return <Ionicons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#fff' },
        })}
      >
        <BottomTab.Screen name="Inicio" component={Inicio} />
        <BottomTab.Screen name="Destinos" component={Destinos} />
        <BottomTab.Screen name="Hospedajes" component={Hospedajes} />
      </BottomTab.Navigator>
    );
  }
}
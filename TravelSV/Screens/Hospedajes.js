import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Hospedaje() {
  // Datos locales de departamentos y sus lugares de hospedaje
  const departamentosHospedaje = [
    {
      nombre: 'San Salvador',
      imagen: 'https://example.com/san-salvador-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel Barcelo',
          descripcion: 'Un hotel moderno en el centro de San Salvador.',
          imagen: 'https://example.com/barcelo.jpg',
        },
        {
          nombre: 'Intercontinental Real',
          descripcion: 'Un hotel de lujo cerca de los principales puntos de la ciudad.',
          imagen: 'https://example.com/intercontinental.jpg',
        },
      ],
    },
    {
      nombre: 'Ahuachapán',
      imagen: 'https://example.com/ahuachapan-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Casa Degraciela',
          descripcion: 'Un encantador hotel boutique en el centro de Apaneca.',
          imagen: 'https://example.com/casa-degraciela.jpg',
        },
        {
          nombre: 'Hotel Alicante Apaneca',
          descripcion: 'Un acogedor hotel rodeado de naturaleza.',
          imagen: 'https://example.com/alicante-apaneca.jpg',
        },
      ],
    },
    {
      nombre: 'Sonsonate',
      imagen: 'https://example.com/sonsonate-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel Los Cobanos',
          descripcion: 'Un hotel de playa con una vista impresionante del océano.',
          imagen: 'https://example.com/los-cobanos-hotel.jpg',
        },
        {
          nombre: 'Hostal El Balsamar',
          descripcion: 'Un cómodo y económico hostal en Juayúa.',
          imagen: 'https://example.com/el-balsamar.jpg',
        },
      ],
    },
    {
      nombre: 'Santa Ana',
      imagen: 'https://example.com/santa-ana-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel Santa Ana',
          descripcion: 'Un hotel acogedor con buena ubicación en Santa Ana.',
          imagen: 'https://example.com/hotel-santa-ana.jpg',
        },
        {
          nombre: 'Hotel Villa Florencia',
          descripcion: 'Un hotel encantador con un ambiente familiar.',
          imagen: 'https://example.com/villa-florencia.jpg',
        },
      ],
    },
    {
      nombre: 'Chalatenango',
      imagen: 'https://example.com/chalatenango-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel El Reloj',
          descripcion: 'Un hotel rodeado de naturaleza con vistas impresionantes.',
          imagen: 'https://example.com/hotel-el-reloj.jpg',
        },
        {
          nombre: 'Cabañas La Ceiba',
          descripcion: 'Cabañas rústicas para una experiencia única en la montaña.',
          imagen: 'https://example.com/cabanas-la-ceiba.jpg',
        },
      ],
    },
    {
      nombre: 'Cuscatlán',
      imagen: 'https://example.com/cuscatlan-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Finca El Encanto',
          descripcion: 'Un lugar tranquilo para descansar en la naturaleza.',
          imagen: 'https://example.com/finca-encanto.jpg',
        },
        {
          nombre: 'Hotel Los Almendros',
          descripcion: 'Un hotel confortable con todas las comodidades.',
          imagen: 'https://example.com/los-almendros.jpg',
        },
      ],
    },
    {
      nombre: 'La Paz',
      imagen: 'https://example.com/la-paz-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel Pacific Paradise',
          descripcion: 'Un hotel de playa con vista al mar.',
          imagen: 'https://example.com/pacific-paradise.jpg',
        },
        {
          nombre: 'Hostal El Faro',
          descripcion: 'Un acogedor hostal cerca de la playa.',
          imagen: 'https://example.com/hostal-el-faro.jpg',
        },
      ],
    },
    {
      nombre: 'San Vicente',
      imagen: 'https://example.com/san-vicente-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel El Cielo',
          descripcion: 'Un hotel con un ambiente relajante y servicios de calidad.',
          imagen: 'https://example.com/hotel-el-cielo.jpg',
        },
        {
          nombre: 'Cabañas Los Pinos',
          descripcion: 'Cabañas rústicas ideales para una escapada familiar.',
          imagen: 'https://example.com/cabanas-los-pinos.jpg',
        },
      ],
    },
    {
      nombre: 'Cabañas',
      imagen: 'https://example.com/cabanas-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Cabañas La Palma',
          descripcion: 'Cabañas cómodas en un entorno natural.',
          imagen: 'https://example.com/cabanas-la-palma.jpg',
        },
        {
          nombre: 'Finca San José',
          descripcion: 'Un lugar ideal para el ecoturismo y la relajación.',
          imagen: 'https://example.com/finca-san-jose.jpg',
        },
      ],
    },
    {
      nombre: 'Usulután',
      imagen: 'https://example.com/usulutan-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel Los Ríos',
          descripcion: 'Un hotel tranquilo cerca del mar.',
          imagen: 'https://example.com/hotel-los-rios.jpg',
        },
        {
          nombre: 'Hostal El Encanto',
          descripcion: 'Un hostal acogedor y económico.',
          imagen: 'https://example.com/hostal-el-encanto.jpg',
        },
      ],
    },
    {
      nombre: 'San Miguel',
      imagen: 'https://example.com/san-miguel-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel El Camino',
          descripcion: 'Un hotel moderno en el corazón de San Miguel.',
          imagen: 'https://example.com/hotel-el-camino.jpg',
        },
        {
          nombre: 'Cabañas San Miguel',
          descripcion: 'Cabañas con excelente vista al lago.',
          imagen: 'https://example.com/cabanas-san-miguel.jpg',
        },
      ],
    },
    {
      nombre: 'Morazán',
      imagen: 'https://example.com/morazan-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel La Casona',
          descripcion: 'Un hotel con encanto en la zona rural.',
          imagen: 'https://example.com/hotel-la-casona.jpg',
        },
        {
          nombre: 'Cabañas El Almendro',
          descripcion: 'Un lugar para desconectar en la naturaleza.',
          imagen: 'https://example.com/cabanas-el-almendro.jpg',
        },
      ],
    },
    {
      nombre: 'La Unión',
      imagen: 'https://example.com/la-union-hospedaje.jpg',
      lugares: [
        {
          nombre: 'Hotel La Unión',
          descripcion: 'Un hotel de playa con servicios completos.',
          imagen: 'https://example.com/hotel-la-union.jpg',
        },
        {
          nombre: 'Cabañas El Coral',
          descripcion: 'Cabañas cómodas a orillas del mar.',
          imagen: 'https://example.com/cabanas-el-coral.jpg',
        },
      ],
    },
  ];

  const [selectedDept, setSelectedDept] = useState(null);  // Departamento seleccionado

  const handleDeptSelection = (dept) => {
    setSelectedDept(dept);
  };

  return (
    <View style={styles.container}>
      

      {selectedDept === null ? (
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {departamentosHospedaje.map((dept, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleDeptSelection(dept)}>
              <Image source={{ uri: dept.imagen }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{dept.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          <Text style={styles.subtitle}>Lugares de hospedaje en {selectedDept.nombre}</Text>
          {selectedDept.lugares.map((lugar, index) => (
            <View key={index} style={styles.lugarCard}>
              <Image source={{ uri: lugar.imagen }} style={styles.lugarImage} />
              <Text style={styles.lugarTitle}>{lugar.nombre}</Text>
              <Text style={styles.lugarDescripcion}>{lugar.descripcion}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedDept(null)}>
            <Text style={styles.backButtonText}>Volver a departamentos</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#D9F0FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6F73D2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F73D2',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#6F73D2',
  },
  lugarCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  lugarImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  lugarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#6F73D2',
  },
  lugarDescripcion: {
    fontSize: 14,
    marginTop: 5,
    color: '#6f6f6f',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#6F73D2',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

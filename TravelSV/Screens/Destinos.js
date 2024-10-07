import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Button, useWindowDimensions } from 'react-native';

export default function Destinos() {
  const { width } = useWindowDimensions();
  const [selectedDept, setSelectedDept] = useState(null);  // Estado del departamento seleccionado
  const [newOpinion, setNewOpinion] = useState({ usuario: '', valoracion: '', comentario: '' }); // Estado para nuevas opiniones
  

  // Datos locales de departamentos y destinos turísticos
  const departamentosData = [
    {
      nombre: 'San Salvador',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2024/06/centro01.jpg',
      lugares: [
        {
          nombre: 'Parque Nacional El Boquerón',
          descripcion: 'Un parque con impresionantes vistas al cráter del volcán.',
          imagen: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4139.png',
        },
        {
          nombre: 'Plaza Libertad',
          descripcion: 'El corazón del centro histórico de San Salvador.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Plazalibertad_es.JPG',
        },
      ],
    },
    {
      nombre: 'Ahuachapán',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/01/Ahuachapa%CC%81n-16032022-Ne%CC%81stor-Trigueros6.jpg',
      lugares: [
        {
          nombre: 'Termales de Santa Teresa',
          descripcion: 'Famosas aguas termales en medio de la naturaleza.',
          imagen: 'https://www.visitcentroamerica.com/wp-content/uploads/2021/07/wellness-salvador-termales-santa-teresa_0001_Foto-3.jpg',
        },
        {
          nombre: 'Laguna El Espino',
          imagen: 'https://turismo.sv/wp-content/uploads/2019/06/laguna-el-espino-1.jpg',
        },
      ],
    },
    {
      nombre: 'Sonsonate',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Catedral_de_Sonsonate.jpg/640px-Catedral_de_Sonsonate.jpg',
      lugares: [
        {
          nombre: 'Ruta de Las Flores',
          descripcion: 'Una ruta pintoresca llena de pueblos coloniales.',
          imagen: 'https://www.visitcentroamerica.com/wp-content/uploads/2017/08/ver-centroamerica-el-salvador-ruta-de-flores-01.jpg',
        },
        {
          nombre: 'Playa Los Cóbanos',
          descripcion: 'Una de las playas más visitadas por los turistas.',
          imagen: 'https://turismo.sv/wp-content/uploads/2019/06/los-cobanos-5.jpg',
        },
      ],
    },
    {
      nombre: 'Santa Ana',
      imagen: 'https://everythingelsalvador.com/wp-content/uploads/2021/09/Santa-Ana-Gothic-Cathedral-1000x667.jpg',
      lugares: [
        {
          nombre: 'Teatro de Santa Ana',
          descripcion: 'Uno de los teatros más emblemáticos del país.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/92/ES_Santa_Ana_06_2011_2535.jpg',
        },
        {
          nombre: 'Cerro Verde',
          descripcion: 'Un destino popular para excursiones y caminatas.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2022/12/DestinationCerroVerde03.jpg',
        },
      ],
    },
    {
      nombre: 'Chalatenango',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Catedral_de_Chalatenango.jpg/1200px-Catedral_de_Chalatenango.jpg',
      lugares: [
        {
          nombre: 'Cerro El Pital',
          descripcion: 'El punto más alto de El Salvador, con clima fresco.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2022/12/DestinationPital.jpg',
        },
        {
          nombre: 'Lago Suchitlán',
          descripcion: 'Un lago artificial perfecto para deportes acuáticos.',
          imagen: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2022/06/El-Lago-Suchitlan-06.jpg',
        },
      ],
    },
    {
      nombre: 'Cuscatlán',
      imagen: 'https://mediaim.expedia.com/destination/1/9757cef2c51822ba10c704198ad4f24d.jpg',
      lugares: [
        {
          nombre: 'Cojutepeque',
          descripcion: 'Famoso por su parque y su deliciosa gastronomía.',
          imagen: 'https://guanacos.com/wp-content/uploads/2022/01/Iglesia-San-Sebastian-2018_Cojutepeque-1.jpg',
        },
        {
          nombre: 'Cerro de las Pavas',
          descripcion: 'Un cerro con vistas panorámicas espectaculares.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2023/01/Cerro-Las-Pavas-01.jpg',
        },
      ],
    },
    {
      nombre: 'La Paz',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/CatedralZacatecoluca001.jpg/800px-CatedralZacatecoluca001.jpg',
      lugares: [
        {
          nombre: 'Playa Costa del Sol',
          descripcion: 'Un destino popular entre los amantes de la playa.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/09/Costa-del-Sol-La-Paz-3-scaled.jpg',
        },
        {
          nombre: 'Laguna de Apastepeque',
          descripcion: 'Una laguna ideal para la pesca y el turismo.',
          imagen: 'https://istu.gob.sv/wp-content/uploads/2020/09/Apastepeque01-min-1024x768.jpg',
        },
      ],
    },
    {
      nombre: 'San Vicente',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2023/01/San-Vicente-02.jpg',
      lugares: [
        {
          nombre: 'Volcán de San Vicente',
          descripcion: 'Un impresionante volcán con rutas de senderismo.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/San_vicente_els.jpg/640px-San_vicente_els.jpg',
        },
        {
          nombre: 'Iglesia El Pilar',
          descripcion: 'Una histórica iglesia en el corazón de San Vicente.',
          imagen: 'https://photos1.blogger.com/blogger/7273/1629/1600/portafiltros%20043.jpg',
        },
      ],
    },
    {
      nombre: 'Cabañas',
      imagen: 'https://www.todoturismo.sv/custom/domain_1/image_files/ckeditor/sitemgr_1.Paisajes.jpg',
      lugares: [
        {
          nombre: 'Cerro Guazapa',
          descripcion: 'Famoso por su historia y rutas de senderismo.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Cerro_Guazapa_vista_desde_NW_-_panoramio.jpg',
        },
        {
          nombre: 'Iglesia de Sensuntepeque',
          descripcion: 'Un hermoso edificio colonial en el centro de la ciudad.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Iglesia_de_Santa_Barbara_Sensuntepeque..jpg',
        },
      ],
    },
    {
      nombre: 'Usulután',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ciudad_de_Usulut%C3%A1n.jpg/1200px-Ciudad_de_Usulut%C3%A1n.jpg',
      lugares: [
        {
          nombre: 'Bahía de Jiquilisco',
          descripcion: 'Un lugar paradisíaco lleno de biodiversidad.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/02/jiquilisco-1.jpg',
        },
        {
          nombre: 'Playa El Espino',
          descripcion: 'Una de las playas más hermosas del oriente del país.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2021/04/PlayaElEspino.jpg',
        },
      ],
    },
    {
      nombre: 'San Miguel',
      imagen: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2024/05/San-Miguel.jpg',
      lugares: [
        {
          nombre: 'Festival de San Miguel',
          descripcion: 'Uno de los festivales más grandes del país.',
          imagen: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2021/11/Carnaval-de-San-Miguel-2019-carrozas-reinas-2-1.jpg',
        },
        {
          nombre: 'Catedral Basílica de San Miguel',
          descripcion: 'Una de las catedrales más impresionantes de El Salvador.',
          imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/33/19/47/catedral-in-san-miguel.jpg',
        },
      ],
    },
    {
      nombre: 'Morazán',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/09/Morazan-Arambala-scaled.jpg',
      lugares: [
        {
          nombre: 'Perquín',
          descripcion: 'Un pueblo famoso por su historia relacionada a la guerra civil.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/A_street_view-PICT0024.jpg',
        },
        {
          nombre: 'Río Sapo',
          descripcion: 'Un destino natural para amantes de la naturaleza.',
          imagen: 'https://diarioelsalvador.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-29-at-4.00.56-PM-1024x576.jpeg',
        },
      ],
    },
    {
      nombre: 'La Unión',
      imagen: 'https://i.ytimg.com/vi/a8fhDfuG2bg/maxresdefault.jpg',
      lugares: [
        {
          nombre: 'Golfo de Fonseca',
          descripcion: 'Un impresionante golfo compartido con Honduras y Nicaragua.',
          imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/02/golfo-fonseca-01.jpg',
        },
        {
          nombre: 'Isla de Meanguera',
          descripcion: 'Una hermosa isla en el Golfo de Fonseca.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Narizona.jpg',
        },
      ],
    },
  ];

  const handleDeptSelection = (dept) => {
    setSelectedDept(dept);  // Actualizar el estado con el departamento seleccionado
  };

  const handleOpinionChange = (field, value) => {
    setNewOpinion({ ...newOpinion, [field]: value }); // Actualizar el estado de la nueva opinión
  };

  const handleAddOpinion = (lugar) => {
    if (newOpinion.usuario && newOpinion.valoracion && newOpinion.comentario) {
      // Agregar la nueva opinión al lugar seleccionado
      lugar.opiniones = lugar.opiniones || []; // Asegurarse de que el campo opiniones exista
      lugar.opiniones.push({ ...newOpinion });
      setNewOpinion({ usuario: '', valoracion: '', comentario: '' }); // Reiniciar el formulario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };



  return (
    <View style={styles.container}>
      {selectedDept === null ? (
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {departamentosData.map((dept, index) => (
            <TouchableOpacity key={index} style={[styles.card, width > 768 ? styles.cardWeb : null]} onPress={() => handleDeptSelection(dept)}>
              <Image source={{ uri: dept.imagen }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{dept.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          <Text style={styles.subtitle}>Destinos turísticos en {selectedDept.nombre}</Text>
          {selectedDept.lugares && selectedDept.lugares.length > 0 ? (
            selectedDept.lugares.map((lugar, index) => (
              <View key={index} style={styles.lugarCard}>
                <Image source={{ uri: lugar.imagen }} style={styles.lugarImage} />
                <Text style={styles.lugarTitle}>{lugar.nombre}</Text>
                <Text style={styles.lugarDescripcion}>{lugar.descripcion}</Text>

                {/* Sección de opiniones */}
                <View style={styles.opinionesContainer}>
                  <Text style={styles.opinionesTitle}>Opiniones de los usuarios:</Text>
                  {lugar.opiniones && lugar.opiniones.length > 0 ? (
                    lugar.opiniones.map((opinion, idx) => (
                      <View key={idx} style={styles.opinion}>
                        <Text style={styles.opinionUsuario}>{opinion.usuario}</Text>
                        <Text>Valoración: {opinion.valoracion} / 5</Text>
                        <Text>{opinion.comentario}</Text>
                      </View>
                    ))
                  ) : (
                    <Text>No hay opiniones disponibles.</Text>
                  )}
                </View>

                {/* Formulario para añadir opinión */}
                <View style={styles.formContainer}>
                  <Text style={styles.formTitle}>Deja tu opinión:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Tu nombre"
                    value={newOpinion.usuario}
                    onChangeText={(value) => handleOpinionChange('usuario', value)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Valoración (1-5)"
                    value={newOpinion.valoracion}
                    keyboardType="numeric"
                    onChangeText={(value) => handleOpinionChange('valoracion', value)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Comentario"
                    value={newOpinion.comentario}
                    onChangeText={(value) => handleOpinionChange('comentario', value)}
                  />
                  <Button title="Enviar Opinión" onPress={() => handleAddOpinion(lugar)} />
                </View>
              </View>
            ))
          ) : (
            <Text>No hay destinos turísticos disponibles en este departamento.</Text>
          )}
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
    backgroundColor: '#FFFF',
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
    transition: 'transform 0.3s ease-in-out',
  },
  cardWeb: {
    width: '30%',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
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
    height: 250,
    borderRadius: 10,
  },
  lugarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#6F73D2',
  },
  lugarDescripcion: {
    fontSize: 16,
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
  opinionesContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  opinionesTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  opinion: {
    marginBottom: 10,
  },
  opinionUsuario: {
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
  },
  formTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Hospedaje() {
  // Datos locales de departamentos y sus lugares de hospedaje
  const departamentosHospedaje = [
    {
      nombre: 'San Salvador',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2024/06/centro01.jpg',
      lugares: [
        {
          nombre: 'Hotel Barcelo',
          descripcion: 'Un hotel moderno en el centro de San Salvador.',
          imagen: 'https://www.lexlatin.com/sites/default/files/San-Salvador-Hotel-Princess.jpg',
        },
        {
          nombre: 'Intercontinental Real',
          descripcion: 'Un hotel de lujo cerca de los principales puntos de la ciudad.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Hotel_inter_SV.JPG',
        },
      ],
    },
    {
      nombre: 'Ahuachapán',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/01/Ahuachapa%CC%81n-16032022-Ne%CC%81stor-Trigueros6.jpg',
      lugares: [
        {
          nombre: 'Casa Degraciela',
          descripcion: 'Un encantador hotel boutique en el centro de Apaneca.',
          imagen: 'https://online.salvadoreantours.com/wp-content/uploads/2016/05/20150519_115345-e1464019920354.jpg',
        },
        {
          nombre: 'Hotel Alicante Apaneca',
          descripcion: 'Un acogedor hotel rodeado de naturaleza.',
          imagen: 'https://alicante-apaneca-hotel-concepcion-de-ataco.hotelmix.es/data/Photos/OriginalPhoto/5457/545729/545729331/Hotel-Alicante-Apaneca-Exterior.JPEG',
        },
      ],
    },
    {
      nombre: 'Sonsonate',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Catedral_de_Sonsonate.jpg/640px-Catedral_de_Sonsonate.jpg',
      lugares: [
        {
          nombre: 'Hotel Los Cobanos',
          descripcion: 'Un hotel de playa con una vista impresionante del océano.',
          imagen: 'https://los-cobanos-village-lodge-acajutla.hotelmix.es/data/Photos/OriginalPhoto/3951/395170/395170011/Hotel-Los-Cobanos-Village-Lodge-Exterior.JPEG',
        },
        {
          nombre: 'Bourbon Hostal',
          descripcion: 'Un cómodo hostal en Juayúa.',
          imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/302862721.jpg?k=0a07f2a1714fe3eccb796fe429196943a0c80470dd10b9dbed4dc32c229611c8&o=&hp=1',
        },
      ],
    },
    {
      nombre: 'Santa Ana',
      imagen: 'https://everythingelsalvador.com/wp-content/uploads/2021/09/Santa-Ana-Gothic-Cathedral-1000x667.jpg',
      lugares: [
        {
          nombre: 'Hotel Tolteka',
          descripcion: 'Un hotel acogedor con buena ubicación en Santa Ana.',
          imagen: 'https://images.trvl-media.com/lodging/5000000/4300000/4297600/4297583/8b8943bb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        },
        {
          nombre: 'Hotel Villa Florencia',
          descripcion: 'Un hotel encantador con un ambiente familiar.',
          imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19924577.jpg?k=d305bcc3d87e7d989585aeccf42c0f564a22598114680c2658d2021b35a73598&o=&hp=1',
        },
      ],
    },
    {
      nombre: 'Chalatenango',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Catedral_de_Chalatenango.jpg/1200px-Catedral_de_Chalatenango.jpg',
      lugares: [
        {
          nombre: 'Hotel El Reloj',
          descripcion: 'Un hotel rodeado de naturaleza con vistas impresionantes.',
          imagen: 'https://scontent.fsal13-1.fna.fbcdn.net/v/t1.6435-9/30706751_955618444618990_5428043818316333056_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=8Oub148097QQ7kNvgHV6Af6&_nc_ht=scontent.fsal13-1.fna&_nc_gid=AnB4j7pz2kfqiw3KYTZ7TfV&oh=00_AYBEaViNk0uR0WorEkt59GSS-fuGsFSAO6drcSo_9EoaGw&oe=6728F573',
        },
        {
          nombre: 'Cabañas La Ceiba',
          descripcion: 'Cabañas rústicas para una experiencia única en la montaña.',
          imagen: 'https://scontent.fsal13-1.fna.fbcdn.net/v/t39.30808-6/411526768_310860738586003_5084372348938908377_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=43umIHjZB1IQ7kNvgF1EtJ1&_nc_ht=scontent.fsal13-1.fna&_nc_gid=ACSVUZsF7X5E5nGvEAZqGIB&oh=00_AYAjagWhkEMIP7qlrcJqsKRWOhVhsh_3q8ls86xXGuKWYA&oe=670729F7',
        },
      ],
    },
    {
      nombre: 'Cuscatlán',
      imagen: 'https://mediaim.expedia.com/destination/1/9757cef2c51822ba10c704198ad4f24d.jpg',
      lugares: [
        {
          nombre: 'Hostal Posada Alta Vista',
          descripcion: 'Un hotel rústico pero perfecto para descansar.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/71/9b/be/hotel-front.jpg?w=700&h=-1&s=1',
        },
        {
          nombre: 'Lago Suchitlan',
          descripcion: 'Un hotel confortable con todas las comodidades.',
          imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448004431.jpg?k=4af7fde33910fa79a512f62f6591928aa0578594404533d94af782fe2b593a1a&o=&hp=1',
        },
      ],
    },
    {
      nombre: 'La Paz',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/CatedralZacatecoluca001.jpg/800px-CatedralZacatecoluca001.jpg',
      lugares: [
        {
          nombre: 'Hotel Pacific Paradise',
          descripcion: 'Un hotel de playa con vista al mar.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7a/0e/72/hotel-pacific-paradise.jpg?w=700&h=-1&s=1',
        },
        {
          nombre: 'Mi tierra Hotel',
          descripcion: 'Una gran opción para alojarse cerca del aeropuerto.',
          imagen: 'https://diarioelsalvador.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-21-at-2.54.24-PM-2.jpeg',
        },
      ],
    },
    {
      nombre: 'San Vicente',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2023/01/San-Vicente-02.jpg',
      lugares: [
        {
          nombre: 'Posada Don Pablito',
          descripcion: 'Un hotel con un ambiente relajante y servicios de calidad.',
          imagen: 'https://posadadonpablito.com/images/galeria/areas%20comunes/2.jpg',
        },
        {
          nombre: 'Hotel Central Park',
          descripcion: 'Cerca del parque ideal para una escapada familiar.',
          imagen: 'https://lh3.googleusercontent.com/p/AF1QipPMwKKATzbTevwEd0UQMOkU7-1jNYBVSh5GcIJv=s1360-w1360-h1020',
        },
      ],
    },
    {
      nombre: 'Cabañas',
      imagen: 'https://www.todoturismo.sv/custom/domain_1/image_files/ckeditor/sitemgr_1.Paisajes.jpg',
      lugares: [
        {
          nombre: 'Hotel y Restaurantes Las Tres Marias',
          descripcion: 'Cómodas habitaciones en un entorno natural.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a4/6e/53/caption.jpg?w=700&h=-1&s=1',
        },
        {
          nombre: 'Hotel Cabañas Park',
          descripcion: 'Un lugar ideal para el ecoturismo y la relajación.',
          imagen: 'https://mejores-moteles.info/wp-content/uploads/2024/02/Hotel-Cabanas-Park.jpeg',
        },
      ],
    },
    {
      nombre: 'Usulután',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ciudad_de_Usulut%C3%A1n.jpg/1200px-Ciudad_de_Usulut%C3%A1n.jpg',
      lugares: [
        {
          nombre: 'Hotel Los Mangos',
          descripcion: 'Un hotel tranquilo cerca del mar.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/08/b4/5d/hotel-los-mangos.jpg?w=2200&h=-1&s=1',
        },
        {
          nombre: 'Puerto Barillas Marina & Lodge',
          descripcion: 'Un hostal acogedor y una opción para aquellos que buscan precio-calidad.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/42/2a/f6/outdoor-pool-palapa-area.jpg?w=2400&h=-1&s=1',
        },
      ],
    },
    {
      nombre: 'San Miguel',
      imagen: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2024/05/San-Miguel.jpg',
      lugares: [
        {
          nombre: 'Hotel Villa San Miguel',
          descripcion: 'Un hotel moderno en el corazón de San Miguel.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/04/26/bb/hotel-villa-san-miguel.jpg?w=700&h=-1&s=1',
        },
        {
          nombre: 'Hotel Camelot',
          descripcion: 'Ofrece un ambiente económico, además de numerosos servicios diseñados para mejorar tu estancia.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/31/85/d0/hotel-camelot.jpg?w=1100&h=-1&s=1',
        },
      ],
    },
    {
      nombre: 'Morazán',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/09/Morazan-Arambala-scaled.jpg',
      lugares: [
        {
          nombre: 'Hotel y Restaurante las Margaritas',
          descripcion: 'Un hotel con encanto en la zona rural.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/21/bc/4c/hotel-y-restaurante-las.jpg?w=1400&h=-1&s=1',
        },
        {
          nombre: 'Hotel y Restaurante La Perla',
          descripcion: 'Un lugar para desconectar en la naturaleza.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/ac/2b/caption.jpg?w=1400&h=-1&s=1',
        },
      ],
    },
    {
      nombre: 'La Unión',
      imagen: 'https://i.ytimg.com/vi/a8fhDfuG2bg/maxresdefault.jpg',
      lugares: [
        {
          nombre: 'Comfort Inn Real La Union',
          descripcion: 'Un hotel de playa con servicios completos.',
          imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/07/2d/49/hotel-exterior.jpg?w=1100&h=-1&s=1',
        },
        {
          nombre: 'Hotel y Restaurante Romega Inn',
          descripcion: 'Un lugar económico y perfecto para descansar.',
          imagen: 'https://mejores-moteles.info/wp-content/uploads/2024/02/Hotel-y-Restaurante-Romega-Inn-1536x864.jpeg',
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

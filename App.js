import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.mainTitle}>Ryan Ferreira - 3° DS AMS</Text>

        {/* Scroll horizontal com logos */}
        <ScrollView horizontal={true} style={styles.horizontalScroll}>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/nintendo.jpg')} style={styles.image} />
            <Text style={styles.text}>Nintendo</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/microsoft.jpg')} style={styles.image} />
            <Text style={styles.text}>Microsoft</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/oracle.jpg')} style={styles.image} />
            <Text style={styles.text}>Oracle</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/google.jpg')} style={styles.image} />
            <Text style={styles.text}>Google</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/asus.jpg')} style={styles.image} />
            <Text style={styles.text}>Asus</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/sony.jpg')} style={styles.image} />
            <Text style={styles.text}>Sony</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/amd.jpg')} style={styles.image} />
            <Text style={styles.text}>AMD</Text>
          </View>
          <View style={styles.logoBox}>
            <Image source={require('./assets/images/samsung.jpg')} style={styles.image} />
            <Text style={styles.text}>Samsung</Text>
          </View>
        </ScrollView>

        {/* Scroll vertical com descrições */}
        <ScrollView style={styles.descriptionScroll}>
          <View style={styles.box}>
            <Image source={require('./assets/images/nintendo.jpg')} style={styles.image2} />
            <Text style={styles.title}>Nintendo</Text>
            <Text style={styles.text}>Empresa japonesa de grande relevância na indústria de jogos. Fundada em 1889, ganhou destaque por inovações em jogabilidade e design de consoles.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/microsoft.jpg')} style={styles.image2} />
            <Text style={styles.title}>Microsoft</Text>
            <Text style={styles.text}>Empresa multinacional dos Estados Unidos, criadora do Windows, do Office, Xbox e da plataforma Azure. Atua fortemente em IA, nuvem e soluções corporativas.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/oracle.jpg')} style={styles.image2} />
            <Text style={styles.title}>Oracle</Text>
            <Text style={styles.text}>Multinacional americana especializada em bancos de dados e soluções corporativas. Referência em softwares para empresas e serviços de nuvem.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/google.jpg')} style={styles.image2} />
            <Text style={styles.title}>Google</Text>
            <Text style={styles.text}>Multinacional americana que domina a internet com serviços como o buscador Google, Android, YouTube e Google Cloud. Também atua em IA e análise de dados.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/asus.jpg')} style={styles.image2} />
            <Text style={styles.title}>Asus</Text>
            <Text style={styles.text}>Empresa de Taiwan focada em hardware. Produz notebooks, placas-mãe, GPUs e periféricos, com destaque na linha gamer ROG.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/sony.jpg')} style={styles.image2} />
            <Text style={styles.title}>Sony</Text>
            <Text style={styles.text}>Multinacional japonesa com atuação em eletrônicos, entretenimento e games. Criadora do PlayStation e destaque em áudio, imagem e filmes.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/amd.jpg')} style={styles.image2} />
            <Text style={styles.title}>AMD</Text>
            <Text style={styles.text}>Empresa americana fabricante de processadores Ryzen e placas gráficas Radeon. Tem ganhado espaço pela performance e bom custo-benefício.</Text>
          </View>

          <View style={styles.box}>
            <Image source={require('./assets/images/samsung.jpg')} style={styles.image2} />
            <Text style={styles.title}>Samsung</Text>
            <Text style={styles.text}>Conglomerado sul-coreano com liderança em smartphones, TVs e semicondutores. Também atua com IA, displays e tecnologia de ponta.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
    padding: 8,
  },
  horizontalScroll: {
    padding: 10,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoBox: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'rgb(40,40,40)',
    borderRadius: 8,
    padding: 10,
    height: 'fit-content',
    width: 200,
  },
  image: {
    width: 128,
    height: 64,
    borderRadius: 12,
    margin: 8,
  },
  image2: {
    width: 128 / 2,
    height: 64 / 2,
    borderRadius: 4,
    margin: 8,
  },
  descriptionScroll: {
    padding: 12,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(40,40,40)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 4,
    width: 96,
  },
  text: {
    color: 'white',
    margin: 10,
  },
});

export default App;
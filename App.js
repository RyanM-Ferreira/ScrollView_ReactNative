import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cainCompanyName}>Ryan Ferreira - 3° DS AMS</Text>

        { /* Tentativa de refatoração para reduzir repetições */}
        {/* Scroll horizontal com logos */}
        <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
          {[
            { imgPath: require('./assets/images/nintendo.jpg'), descriptions: 'Nintendo' },
            { imgPath: require('./assets/images/microsoft.jpg'), descriptions: 'Microsoft' },
            { imgPath: require('./assets/images/oracle.jpg'), descriptions: 'Oracle' },
            { imgPath: require('./assets/images/google.jpg'), descriptions: 'Google' },
            { imgPath: require('./assets/images/asus.jpg'), descriptions: 'Asus' },
            { imgPath: require('./assets/images/sony.jpg'), descriptions: 'Sony' },
            { imgPath: require('./assets/images/amd.jpg'), descriptions: 'AMD' },
            { imgPath: require('./assets/images/samsung.jpg'), descriptions: 'Samsung' },
          ].map(item => (
            <View style={styles.logoBox}>
              <Image source={item.imgPath} style={styles.image} />
              <Text style={styles.text}>{item.descriptions}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Scroll vertical com descriptionsrições */}
        <ScrollView style={styles.verticalScroll} showsVerticalScrollIndicator={false}>
          {[
            {
              imgPath: require('./assets/images/nintendo.jpg'),
              companyName: 'Nintendo',
              descriptions: 'Empresa japonesa de grande relevância na indústria de jogos. Fundada em 1889, ganhou destaque por inovações em jogabilidade e design de consoles.',
            },
            {
              imgPath: require('./assets/images/microsoft.jpg'),
              companyName: 'Microsoft',
              descriptions: 'Empresa multinacional dos Estados Unidos, criadora do Windows, do Office, Xbox e da plataforma Azure. Atua fortemente em IA, nuvem e soluções corporativas.',
            },
            {
              imgPath: require('./assets/images/oracle.jpg'),
              companyName: 'Oracle',
              descriptions: 'Multinacional americana especializada em bancos de dados e soluções corporativas. Referência em softwares para empresas e serviços de nuvem.',
            },
            {
              imgPath: require('./assets/images/google.jpg'),
              companyName: 'Google',
              descriptions: 'Multinacional americana que domina a internet com serviços como o buscador Google, Android, YouTube e Google Cloud. Também atua em IA e análise de dados.',
            },
            {
              imgPath: require('./assets/images/asus.jpg'),
              companyName: 'Asus',
              descriptions: 'Empresa de Taiwan focada em hardware. Produz notebooks, placas-mãe, GPUs e periféricos, com destaque na linha gamer ROG.',
            },
            {
              imgPath: require('./assets/images/sony.jpg'),
              companyName: 'Sony',
              descriptions: 'Multinacional japonesa com atuação em eletrônicos, entretenimento e games. Criadora do PlayStation e destaque em áudio, imagem e filmes.',
            },
            {
              imgPath: require('./assets/images/amd.jpg'),
              companyName: 'AMD',
              descriptions: 'Empresa americana fabricante de processadores Ryzen e placas gráficas Radeon. Tem ganhado espaço pela performance e bom custo-benefício.',
            },
            {
              imgPath: require('./assets/images/samsung.jpg'),
              companyName: 'Samsung',
              descriptions: 'Conglomerado sul-coreano com liderança em smartphones, TVs e semicondutores. Também atua com IA, displays e tecnologia de ponta.',
            },
          ].map(item => (
            <View style={styles.box}>
              <Image source={item.imgPath} style={styles.image2} />
              <View style={styles.descriptionsriptionText}>
                <Text style={styles.companyName}>{item.companyName}</Text>
                <Text style={styles.text}>{item.descriptions}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
    padding: 12,
  },
  cainCompanyName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
    textAlign: 'center',
  },
  horizontalScroll: {
    padding: 16,
    backgroundColor: 'rgb(5,5,5)',
    borderRadius: 12,
    marginBottom: 20,
  },
  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(40,40,40)',
    borderRadius: 10,
    padding: 12,
    marginRight: 16,
    width: 180,
  },
  image: {
    width: 128,
    height: 64,
    borderRadius: 10,
    marginBottom: 8,
  },
  image2: {
    width: 64,
    height: 32,
    borderRadius: 6,
    marginRight: 12,
  },
  verticalScroll: {
    paddingBottom: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(40,40,40)',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  descriptionsriptionText: {
    flex: 1,
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 4,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default App;
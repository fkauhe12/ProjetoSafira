import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0E2E98', '#3E57AC', '#4873FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Image source={require('../../assets/Logo_safira.png')} style={styles.logo} />
        <Text style={styles.greeting}>Olá, Visitante!</Text>
        <TouchableOpacity style={styles.notification}>
          <Ionicons name="notifications-outline" size={28} color="#000" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.containerConteudo}>
          <View style={styles.carousel}>
            <Text style={styles.carouselText}>Anúncios de Recomendação</Text>
          </View>

          <Text style={styles.sectionTitle}>Mais Vendidos!</Text>
          <View style={styles.productsRow}>
            <View style={styles.productCard}>
              <View style={styles.imagePlaceholder}>
                <Text style={{ color: '#fff' }}>Imagem</Text>
              </View>
              <Text style={styles.productName}>Produto 1</Text>
            </View>

            <View style={styles.productCard}>
              <View style={styles.imagePlaceholder}>
                <Text style={{ color: '#fff' }}>Imagem</Text>
              </View>
              <Text style={styles.productName}>Produto 2</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <LinearGradient colors={['#264AC0', '#1C368D', '#12235A']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#000" />
          <Text>Busca</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="hand-holding-heart" size={24} color="#000" />
          <Text>SAD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="basket-outline" size={24} color="#000" />
          <Text>Cesta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More')}>
          <Ionicons name="menu" size={24} color="#000" />
          <Text>Mais</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#d9d9d9' },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: { width: 60, height: 60, resizeMode: 'contain', borderRadius: 999 },
  greeting: { flex: 1, color: '#fff', fontSize: 16, fontWeight: '600', marginLeft: 10 },
  notification: { position: 'relative', backgroundColor: '#fff', borderRadius: 999, padding: 6 },
  badge: { position: 'absolute', top: -5, right: -5, backgroundColor: 'red', borderRadius: 999, paddingHorizontal: 5 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  body: { flex: 4 },
  containerConteudo: { paddingHorizontal: 10 },
  carousel: { backgroundColor: '#B0BEC5', borderRadius: 10, height: 120, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  carouselText: { color: '#fff', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  productsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  productCard: { width: '48%', backgroundColor: '#E0E0E0', borderRadius: 10, padding: 10, alignItems: 'center' },
  imagePlaceholder: { width: '100%', height: 100, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderRadius: 8 },
  productName: { fontSize: 14, fontWeight: '600' },
  bottomNav: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  navItem: { flex: 1, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginHorizontal: 5, borderRadius: 12, maxWidth: 70 },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0E2E98", "#3E57AC", "#4873FF"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.header}>
        <Image source={require('../../assets/Logo_safira.png')} style={styles.logo} />
        <Text style={styles.greeting}>Olá, Visitante!</Text>
        <TouchableOpacity style={styles.notification}>
          <Ionicons name="notifications-outline" size={26} color="#000" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.body}>
        <TouchableOpacity style={styles.loginButton}>
          <LinearGradient colors={["#4873FF", "#3E57AC", "#0E2E98"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.loginGradient}>
            <Text style={styles.loginText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <ScrollView style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informações</Text>

          <TouchableOpacity style={styles.infoItem}>
            <Ionicons name="pricetag-outline" size={20} color="#000" />
            <Text style={styles.infoText}>Cupons</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem}>
            <Ionicons name="location-outline" size={20} color="#000" />
            <Text style={styles.infoText}>Endereços</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem}>
            <MaterialIcons name="chat-bubble-outline" size={20} color="#000" />
            <Text style={styles.infoText}>Fale conosco</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <LinearGradient colors={["#264AC0", "#1C368D", "#12235A"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#000" />
          <Text>Busca</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="hand-holding-heart" size={22} color="#000" />
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
  header: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 40, height: 100, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  logo: { width: 60, height: 60, resizeMode: 'contain', borderRadius: 999 },
  greeting: { flex: 1, color: '#fff', fontSize: 16, fontWeight: '600', marginLeft: 10 },
  notification: { position: 'relative', backgroundColor: '#fff', borderRadius: 999, padding: 6 },
  badge: { position: 'absolute', top: -5, right: -5, backgroundColor: 'red', borderRadius: 999, paddingHorizontal: 5 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  body: { flex: 4 },
  loginButton: { margin: 20, borderRadius: 10, overflow: 'hidden' },
  loginGradient: { paddingVertical: 15, alignItems: 'center', borderRadius: 10 },
  loginText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  infoSection: { marginHorizontal: 20 },
  infoTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#666' },
  infoItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10 },
  infoText: { marginLeft: 10, fontSize: 16, color: '#000' },
  bottomNav: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  navItem: { flex: 1, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginHorizontal: 5, borderRadius: 12, maxWidth: 70 },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={24} color="rgba(0, 0, 0, 0.32)" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_cesta}>
          <Text style={styles.text}>Cesta Vazia</Text>
          <Image source={require('../../assets/icon_car_vazio.png')} style={styles.imagem} />
          <Text style={styles.text}>Adicione Produtos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end' },
  container: { height: '92%', backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backButtonText: { color: 'rgba(0, 0, 0, 0.32)', marginLeft: 2, fontSize: 19, fontWeight: 'bold' },
  container_cesta: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 25, fontWeight: 'bold' },
  imagem: { width: 300, height: 300 },
});

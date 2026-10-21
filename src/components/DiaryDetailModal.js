import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { COLORS, SPACE, TYPO } from '../styles/tokens';

export default function DiaryDetailModal({ visible, entry, onClose }) {
  if (!entry) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          
          {/* Bagian Gambar yang ditambahkan */}
          {entry.heroUri && (
            <Image 
              source={entry.heroUri} 
              style={styles.heroImage} 
            />
          )}
          
          <View style={styles.content}>
            <Text style={styles.title}>{entry.title}</Text>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.body}>{entry.body}</Text>
            
            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>Tutup</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center', 
    padding: SPACE.l 
  },
  modal: { 
    backgroundColor: COLORS.surface, 
    borderRadius: 16, 
    overflow: 'hidden' // Penting: agar sudut gambar ikut melengkung sesuai modal
  },
  heroImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover', // Membuat gambar memenuhi kotak tanpa merubah proporsi
    backgroundColor: '#e2e8f0', // Warna dasar abu-abu
  },
  content: {
    padding: SPACE.l,
  },
  title: { fontSize: TYPO.h1, fontWeight: 'bold', color: COLORS.text },
  date: { color: COLORS.muted, marginBottom: SPACE.m, marginTop: 4 },
  body: { fontSize: TYPO.body, marginBottom: SPACE.l, color: COLORS.text, lineHeight: 22 },
  closeBtn: { 
    backgroundColor: COLORS.accent, 
    padding: SPACE.m, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  closeText: { color: '#fff', fontWeight: 'bold' }
});
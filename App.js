import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { chapters, developerInfo } from './data';

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  const openEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const renderDetail = () => (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedChapter(null)} style={styles.backButton}>
        <Text style={styles.backText}>{'\u2190'} ወደ ማውጫ ተመለስ</Text>
      </TouchableOpacity>

      <Text style={styles.brandTag}>Agegnehu Tech</Text>
      <Text style={styles.detailTitle}>{selectedChapter.title}</Text>
      <View style={styles.divider} />

      <Text style={styles.contentParagraph}>{selectedChapter.content}</Text>

      {selectedChapter.details.map((item, index) => (
        <View key={index} style={styles.lessonRow}>
          <Text style={styles.germanText}>{item.de}</Text>
          <Text style={styles.amharicText}>{item.am}</Text>
        </View>
      ))}
      <Text style={styles.footerText}>{'\u00A9'} 2026 Agegnehu Tech - All Rights Reserved</Text>
    </ScrollView>
  );

  const renderAbout = () => (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => setShowAbout(false)} style={styles.backButton}>
        <Text style={styles.backText}>{'\u2190'} ወደ ማውጫ ተመለስ</Text>
      </TouchableOpacity>

      <View style={styles.aboutHeader}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <Text style={styles.aboutName}>{developerInfo.name}</Text>
        <Text style={styles.aboutBrand}>{developerInfo.brandName}</Text>
        <View style={styles.aboutBadge}>
          <Text style={styles.aboutBadgeText}>Creator & Developer</Text>
        </View>
      </View>

      <View style={styles.aboutDividerFull} />

      <Text style={styles.aboutSectionTitle}>About the Developer</Text>
      <View style={styles.aboutCard}>
        <Text style={styles.aboutBody}>{developerInfo.biographyEnglish}</Text>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutBody}>{developerInfo.originEnglish}</Text>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutBody}>{developerInfo.visionEnglish}</Text>
      </View>

      <View style={styles.aboutDividerFull} />

      <Text style={styles.aboutSectionTitle}>ስለ ገንቢው</Text>
      <View style={styles.aboutCard}>
        <Text style={styles.aboutBodyAmharic}>{developerInfo.biographyAmharic}</Text>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutBodyAmharic}>{developerInfo.originAmharic}</Text>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutBodyAmharic}>{developerInfo.visionAmharic}</Text>
      </View>

      <View style={styles.aboutDividerFull} />

      <Text style={styles.aboutSectionTitle}>Contact / {'\u12A5\u12ED\u1273'}</Text>
      <View style={styles.contactCard}>
        <Text style={styles.contactLabel}>For feedback, inquiries, and collaboration:</Text>
        {developerInfo.emails.map((email, index) => (
          <TouchableOpacity key={index} onPress={() => openEmail(email)} style={styles.emailRow}>
            <Text style={styles.emailIcon}>{'\u2709'}</Text>
            <Text style={styles.emailText}>{email}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footerText}>{'\u00A9'} 2026 Agegnehu Tech - All Rights Reserved</Text>
    </ScrollView>
  );

  if (showAbout) return renderAbout();
  if (selectedChapter) return renderDetail();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerBox}>
        <Text style={styles.mainLogo}>Agegnehu Tech</Text>
        <Text style={styles.subLogo}>German Language Master</Text>
      </View>

      <FlatList
        data={chapters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chapterCard} onPress={() => setSelectedChapter(item)}>
            <View style={styles.chapterCardContent}>
              <Text style={styles.chapterTitle}>{item.title}</Text>
              <Text style={styles.authorTag}>By {item.author}</Text>
            </View>
            <Text style={styles.arrowIcon}>{'\u276F'}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.aboutButton} onPress={() => setShowAbout(true)}>
            <Text style={styles.aboutButtonText}>About the Developer / ስለ ገንቢው</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 20 },
  headerBox: { marginTop: 40, marginBottom: 30, alignItems: 'center' },
  mainLogo: { fontSize: 34, fontWeight: 'bold', color: '#003366', letterSpacing: 1 },
  subLogo: { fontSize: 14, color: '#666', fontStyle: 'italic' },
  chapterCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chapterCardContent: { flex: 1 },
  chapterTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
  authorTag: { fontSize: 12, color: '#003366', marginTop: 4 },
  arrowIcon: { fontSize: 18, color: '#003366' },

  backButton: { marginTop: 40, marginBottom: 20 },
  backText: { color: '#003366', fontWeight: 'bold', fontSize: 16 },
  brandTag: { color: '#003366', fontWeight: 'bold', textAlign: 'right' },
  detailTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginVertical: 10 },
  divider: { height: 2, backgroundColor: '#003366', marginBottom: 20, width: '40%' },
  contentParagraph: { fontSize: 16, lineHeight: 24, color: '#444', marginBottom: 20 },
  lessonRow: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dde5ef',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  germanText: { fontSize: 19, fontWeight: 'bold', color: '#003366', marginBottom: 4 },
  amharicText: { fontSize: 16, color: '#444', marginTop: 5, lineHeight: 26 },
  footerText: { textAlign: 'center', marginTop: 40, marginBottom: 20, color: '#999', fontSize: 12 },

  aboutButton: {
    backgroundColor: '#003366',
    padding: 18,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  aboutButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  aboutHeader: { alignItems: 'center', marginBottom: 20, marginTop: 10 },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 6,
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  aboutName: { fontSize: 26, fontWeight: 'bold', color: '#003366', marginBottom: 4 },
  aboutBrand: { fontSize: 16, color: '#666', fontStyle: 'italic', marginBottom: 10 },
  aboutBadge: {
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#003366',
  },
  aboutBadgeText: { color: '#003366', fontSize: 13, fontWeight: '600' },

  aboutDividerFull: { height: 2, backgroundColor: '#003366', marginVertical: 20, opacity: 0.3 },
  aboutSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 15,
  },
  aboutCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#003366',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  aboutBody: { fontSize: 15, lineHeight: 24, color: '#333' },
  aboutBodyAmharic: { fontSize: 15, lineHeight: 26, color: '#333' },

  contactCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#003366',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactLabel: { fontSize: 14, color: '#555', marginBottom: 15 },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f5ff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  emailIcon: { fontSize: 20, marginRight: 12, color: '#003366' },
  emailText: { fontSize: 15, color: '#003366', fontWeight: '600' },
});

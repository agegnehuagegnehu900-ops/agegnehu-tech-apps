import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Linking,
  TextInput,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { chapters, developerInfo } from './data';

// Markdown-style renderer: supports **bold**, bullet points (• or -), and | tables |
const renderMarkdownText = (text, baseStyle) => {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let tableRows = [];
  let inTable = false;

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <View key={`table-${elements.length}`} style={mdStyles.table}>
          {tableRows.map((row, ri) => {
            const cells = row.split('|').filter(c => c.trim() !== '');
            const isSeparator = cells.every(c => /^[\s-]+$/.test(c));
            if (isSeparator) return null;
            return (
              <View key={ri} style={[mdStyles.tableRow, ri === 0 && mdStyles.tableHeaderRow]}>
                {cells.map((cell, ci) => (
                  <View key={ci} style={mdStyles.tableCell}>
                    <Text style={[ri === 0 ? mdStyles.tableHeaderText : mdStyles.tableCellText]}>
                      {cell.trim()}
                    </Text>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      );
      tableRows = [];
    }
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table line (contains |)
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      inTable = true;
      tableRows.push(line);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Empty line
    if (line.trim() === '') {
      elements.push(<View key={`space-${i}`} style={{ height: 8 }} />);
      continue;
    }

    // Bullet point
    if (/^[\s]*[•\-]\s/.test(line)) {
      const bulletText = line.replace(/^[\s]*[•\-]\s*/, '');
      elements.push(
        <View key={`bullet-${i}`} style={mdStyles.bulletRow}>
          <Text style={mdStyles.bulletDot}>{'\u2022'}</Text>
          <Text style={[baseStyle, mdStyles.bulletText]}>{renderBoldText(bulletText)}</Text>
        </View>
      );
      continue;
    }

    // Regular text with possible **bold**
    elements.push(
      <Text key={`line-${i}`} style={baseStyle}>{renderBoldText(line)}</Text>
    );
  }

  if (inTable) flushTable();
  return elements;
};

// Parse **bold** markers within text
const renderBoldText = (text) => {
  if (!text) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <Text key={idx} style={{ fontWeight: 'bold', color: '#003366' }}>{part.slice(2, -2)}</Text>;
    }
    return part;
  });
};

// Get all searchable items from all chapters
const getAllItems = () => {
  const items = [];
  chapters.forEach((chapter) => {
    chapter.details.forEach((item) => {
      items.push({ ...item, chapterTitle: chapter.title, chapterId: chapter.id });
    });
  });
  return items;
};

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const allItems = useMemo(() => getAllItems(), []);

  // Search results filtered by query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allItems.filter((item) => {
      const deMatch = item.de && item.de.toLowerCase().includes(q);
      const amMatch = item.am && item.am.toLowerCase().includes(q);
      return deMatch || amMatch;
    }).slice(0, 50); // Limit to 50 results for performance
  }, [searchQuery, allItems]);

  const openEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  // Count total vocabulary items
  const totalItems = useMemo(() => {
    return chapters.reduce((sum, ch) => sum + ch.details.length, 0);
  }, []);

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
          <View style={styles.amharicContainer}>
            {renderMarkdownText(item.am, styles.amharicText)}
          </View>
        </View>
      ))}
      <Text style={styles.footerText}>{'\u00A9'} 2026 Agegnehu Tech - All Rights Reserved</Text>
    </ScrollView>
  );

  const renderSearchResults = () => (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => { setShowSearch(false); setSearchQuery(''); }} style={styles.backButton}>
        <Text style={styles.backText}>{'\u2190'} ወደ ማውጫ ተመለስ</Text>
      </TouchableOpacity>

      <Text style={styles.detailTitle}>Search Results / የፍለጋ ውጤቶች</Text>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search / ፈልግ... (German, Amharic)"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoFocus
        />
      </View>

      {searchQuery.trim() !== '' && (
        <Text style={styles.resultCount}>
          {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
        </Text>
      )}

      {searchResults.map((item, index) => (
        <View key={index} style={styles.lessonRow}>
          <Text style={styles.searchChapterTag}>{item.chapterTitle}</Text>
          <Text style={styles.germanText}>{item.de}</Text>
          <View style={styles.amharicContainer}>
            {renderMarkdownText(item.am, styles.amharicText)}
          </View>
        </View>
      ))}

      {searchQuery.trim() !== '' && searchResults.length === 0 && (
        <View style={styles.noResultsBox}>
          <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
          <Text style={styles.noResultsHint}>Try searching in German or Amharic</Text>
        </View>
      )}

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

      <Text style={styles.aboutSectionTitle}>{'\u1235\u120B \u1308\u1295\u1262\u12CD'}</Text>
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
  if (showSearch) return renderSearchResults();
  if (selectedChapter) return renderDetail();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerBox}>
        <Text style={styles.mainLogo}>Agegnehu Tech</Text>
        <Text style={styles.subLogo}>German Language Master</Text>
        <Text style={styles.itemCount}>{totalItems}+ Vocabulary Items | 8 Chapters</Text>
      </View>

      {/* Search Bar */}
      <TouchableOpacity style={styles.searchButton} onPress={() => setShowSearch(true)}>
        <Text style={styles.searchButtonIcon}>{'\uD83D\uDD0D'}</Text>
        <Text style={styles.searchButtonText}>Search any word / ቃል ፈልግ...</Text>
      </TouchableOpacity>

      <FlatList
        data={chapters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chapterCard} onPress={() => setSelectedChapter(item)}>
            <View style={styles.chapterCardContent}>
              <Text style={styles.chapterTitle}>{item.title}</Text>
              <Text style={styles.authorTag}>By {item.author}</Text>
              <Text style={styles.itemCountTag}>{item.details.length} items</Text>
            </View>
            <Text style={styles.arrowIcon}>{'\u276F'}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View>
            {Platform.OS === 'web' && (
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={() => Linking.openURL('https://expo.dev/artifacts/eas/srBv9AKp7QjAeGfRFRaEoL.apk')}
              >
                <Text style={styles.downloadButtonIcon}>{'\uD83D\uDCF2'}</Text>
                <Text style={styles.downloadButtonText}>DOWNLOAD APP (APK)</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.aboutButton} onPress={() => setShowAbout(true)}>
              <Text style={styles.aboutButtonText}>About the Developer / {'\u1235\u120B \u1308\u1295\u1262\u12CD'}</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

// Markdown-specific styles
const mdStyles = StyleSheet.create({
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 2,
    paddingLeft: 4,
  },
  bulletDot: {
    fontSize: 16,
    color: '#003366',
    marginRight: 8,
    marginTop: 2,
    fontWeight: 'bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  table: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 6,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dde5ef',
  },
  tableHeaderRow: {
    backgroundColor: '#003366',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#dde5ef',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 13,
  },
  tableCellText: {
    color: '#333',
    fontSize: 13,
  },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 20 },
  headerBox: { marginTop: 40, marginBottom: 20, alignItems: 'center' },
  mainLogo: { fontSize: 34, fontWeight: 'bold', color: '#003366', letterSpacing: 1 },
  subLogo: { fontSize: 14, color: '#666', fontStyle: 'italic' },
  itemCount: { fontSize: 12, color: '#999', marginTop: 4 },

  // Search Bar
  searchButton: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#003366',
    elevation: 3,
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButtonIcon: { fontSize: 20, marginRight: 10 },
  searchButtonText: { fontSize: 16, color: '#999' },

  searchBarContainer: { marginBottom: 15 },
  searchInput: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#003366',
    fontSize: 16,
    color: '#333',
  },
  resultCount: { fontSize: 14, color: '#003366', fontWeight: 'bold', marginBottom: 10 },
  searchChapterTag: {
    fontSize: 11,
    color: '#fff',
    backgroundColor: '#003366',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 6,
    overflow: 'hidden',
  },
  noResultsBox: { alignItems: 'center', marginTop: 40, padding: 20 },
  noResultsText: { fontSize: 16, color: '#666', marginBottom: 8 },
  noResultsHint: { fontSize: 14, color: '#999' },

  // Chapter cards
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
  itemCountTag: { fontSize: 11, color: '#999', marginTop: 2 },
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
  amharicContainer: { marginTop: 5 },
  amharicText: { fontSize: 15, color: '#444', lineHeight: 24 },
  footerText: { textAlign: 'center', marginTop: 40, marginBottom: 20, color: '#999', fontSize: 12 },

  downloadButton: {
    backgroundColor: '#28a745',
    padding: 20,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  downloadButtonIcon: { fontSize: 24, marginRight: 10 },
  downloadButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },

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

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Search, MapPin, Filter } from 'lucide-react-native';
import { ShopCard } from '@/components/ShopCard';
import { CategoryButton } from '@/components/CategoryButton';
import { mockShopData, mockCategories } from '@/data/mockData';

export default function DiscoverScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter shops based on selected category
  const filteredShops = selectedCategory === 'all' 
    ? mockShopData
    : mockShopData.filter(shop => shop.categories.includes(selectedCategory));

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={styles.locationContainer}>
          <MapPin size={16} color="#FF385C" />
          <Text style={styles.locationText}>New York, NY</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#8E8E93" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search shops and products"
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#FF385C" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={mockCategories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryButton 
                category={item}
                isSelected={selectedCategory === item.id}
                onPress={() => setSelectedCategory(item.id)}
              />
            )}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Featured Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Shops</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredShops.filter(shop => shop.featured)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ShopCard 
                shop={item}
                onPress={() => router.push(`/shop/${item.id}`)}
                featured
              />
            )}
            contentContainerStyle={styles.shopsList}
          />
        </View>

        {/* Nearby Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nearbyShopsGrid}>
            {filteredShops.slice(0, 4).map((shop) => (
              <ShopCard 
                key={shop.id}
                shop={shop}
                onPress={() => router.push(`/shop/${shop.id}`)}
                grid
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
    marginLeft: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000000',
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 12,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingVertical: 16,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF385C',
  },
  shopsList: {
    paddingHorizontal: 16,
  },
  nearbyShopsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
});
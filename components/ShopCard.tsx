import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';

interface Shop {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  location: string;
  distance: string;
  featured?: boolean;
  categories: string[];
}

interface ShopCardProps {
  shop: Shop;
  onPress: () => void;
  featured?: boolean;
  grid?: boolean;
}

export function ShopCard({ shop, onPress, featured, grid }: ShopCardProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        featured ? styles.featuredContainer : null,
        grid ? styles.gridContainer : null,
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: shop.imageUrl }}
        style={[
          styles.image,
          featured ? styles.featuredImage : null,
          grid ? styles.gridImage : null,
        ]}
      />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{shop.name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={14} color="#FFB800" fill="#FFB800" />
          <Text style={styles.rating}>{shop.rating}</Text>
        </View>
        <View style={styles.locationContainer}>
          <MapPin size={12} color="#8E8E93" />
          <Text style={styles.location} numberOfLines={1}>
            {shop.location} • {shop.distance}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginRight: 12,
    marginBottom: 12,
  },
  featuredContainer: {
    width: 280,
  },
  gridContainer: {
    width: '48%',
    marginRight: '2%',
  },
  image: {
    width: '100%',
    height: 150,
  },
  featuredImage: {
    height: 180,
  },
  gridImage: {
    height: 120,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    color: '#8E8E93',
    marginLeft: 4,
  },
});
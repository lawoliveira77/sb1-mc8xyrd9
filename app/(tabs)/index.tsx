import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';
import FeedItem from '@/components/FeedItem';
import StoryCircle from '@/components/StoryCircle';
import { mockFeedData, mockStories } from '@/data/mockData';

export default function HomeScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [feedData, setFeedData] = useState(mockFeedData);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate a data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Highstreet</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Shop Stories */}
        <View style={styles.storiesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={mockStories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <StoryCircle 
                imageUrl={item.imageUrl} 
                name={item.shopName}
                onPress={() => router.push(`/shop/${item.id}/story`)}
              />
            )}
            contentContainerStyle={styles.storiesList}
          />
        </View>

        {/* Feed Items */}
        <View style={styles.feedContainer}>
          {feedData.map((item) => (
            <FeedItem
              key={item.id}
              item={item}
              onPress={() => router.push(`/shop/${item.shopId}`)}
              onProductPress={(productId) => router.push(`/product/${productId}`)}
            />
          ))}
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
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF385C',
  },
  storiesContainer: {
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  storiesList: {
    paddingHorizontal: 16,
  },
  feedContainer: {
    paddingBottom: 20,
  },
});
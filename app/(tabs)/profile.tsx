import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Settings, Heart, ShoppingBag, MapPin, Bell, ChevronRight, LogOut, Moon } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Mock user data
  const user = {
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    location: 'New York, NY',
    favorites: 12,
    orders: 8
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const menuItems = [
    {
      title: 'My Orders',
      icon: <ShoppingBag size={22} color="#FF385C" />,
      onPress: () => router.push('/orders')
    },
    {
      title: 'Saved Items',
      icon: <Heart size={22} color="#FF385C" />,
      onPress: () => router.push('/favorites')
    },
    {
      title: 'Shipping Addresses',
      icon: <MapPin size={22} color="#FF385C" />,
      onPress: () => router.push('/addresses')
    }
  ];

  const settingsItems = [
    {
      title: 'Dark Mode',
      icon: <Moon size={22} color="#6E6E73" />,
      toggle: true,
      value: darkMode,
      onToggle: toggleDarkMode
    },
    {
      title: 'Notifications',
      icon: <Bell size={22} color="#6E6E73" />,
      toggle: true,
      value: notifications,
      onToggle: toggleNotifications
    },
    {
      title: 'Account Settings',
      icon: <Settings size={22} color="#6E6E73" />,
      onPress: () => router.push('/settings')
    }
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <View style={styles.locationContainer}>
              <MapPin size={14} color="#8E8E93" />
              <Text style={styles.locationText}>{user.location}</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => router.push('/edit-profile')}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Heart size={20} color="#FF385C" />
            <Text style={styles.statValue}>{user.favorites}</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ShoppingBag size={20} color="#FF385C" />
            <Text style={styles.statValue}>{user.orders}</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>My Account</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.menuItem, 
                index === menuItems.length - 1 ? styles.menuItemLast : null
              ]}
              onPress={item.onPress}
            >
              <View style={styles.menuItemLeft}>
                {item.icon}
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <ChevronRight size={20} color="#C7C7CC" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Settings</Text>
          {settingsItems.map((item, index) => (
            <View 
              key={index} 
              style={[
                styles.menuItem, 
                index === settingsItems.length - 1 ? styles.menuItemLast : null
              ]}
            >
              <View style={styles.menuItemLeft}>
                {item.icon}
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              {item.toggle ? (
                <Switch
                  value={item.value}
                  onValueChange={item.onToggle}
                  trackColor={{ false: '#E5E5EA', true: '#FF385C' }}
                  thumbColor={'#FFFFFF'}
                />
              ) : (
                <TouchableOpacity onPress={item.onPress}>
                  <ChevronRight size={20} color="#C7C7CC" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#FF385C" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: '#6E6E73',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#8E8E93',
    marginLeft: 4,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
  },
  editButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#E5E5EA',
  },
  sectionContainer: {
    marginTop: 24,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF385C',
    marginLeft: 8,
  },
  versionText: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
});
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryButtonProps {
  category: Category;
  isSelected: boolean;
  onPress: () => void;
}

export function CategoryButton({ category, isSelected, onPress }: CategoryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? styles.selectedContainer : null,
      ]}
      onPress={onPress}
    >
      <Text style={styles.icon}>{category.icon}</Text>
      <Text style={[
        styles.text,
        isSelected ? styles.selectedText : null,
      ]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    marginRight: 8,
  },
  selectedContainer: {
    backgroundColor: '#FF385C',
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
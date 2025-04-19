export const mockShopData = [
  {
    id: '1',
    name: 'Urban Outfitters',
    imageUrl: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
    rating: 4.8,
    location: 'SoHo',
    distance: '0.3 mi',
    featured: true,
    categories: ['clothing', 'accessories']
  },
  {
    id: '2',
    name: 'The Plant Shop',
    imageUrl: 'https://images.pexels.com/photos/1964869/pexels-photo-1964869.jpeg',
    rating: 4.6,
    location: 'Chelsea',
    distance: '0.5 mi',
    featured: true,
    categories: ['home', 'plants']
  },
  {
    id: '3',
    name: 'Vintage Finds',
    imageUrl: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    rating: 4.9,
    location: 'East Village',
    distance: '0.8 mi',
    categories: ['vintage', 'clothing']
  },
  {
    id: '4',
    name: 'Modern Home',
    imageUrl: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
    rating: 4.7,
    location: 'Tribeca',
    distance: '1.2 mi',
    categories: ['home', 'furniture']
  }
];

export const mockCategories = [
  {
    id: 'all',
    name: 'All',
    icon: '🏪'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    icon: '👕'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: '👜'
  },
  {
    id: 'home',
    name: 'Home',
    icon: '🏠'
  },
  {
    id: 'plants',
    name: 'Plants',
    icon: '🌿'
  },
  {
    id: 'vintage',
    name: 'Vintage',
    icon: '📷'
  }
];

export const mockFeedData = [
  {
    id: '1',
    shopId: '1',
    shopName: 'Urban Outfitters',
    shopAvatar: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
    image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
    caption: 'New collection just arrived! 🌟 Check out our latest summer styles.',
    likes: 128,
    comments: 24,
    timestamp: '2h ago',
    products: [
      {
        id: 'p1',
        name: 'Summer Dress',
        price: '$89.99',
        image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg'
      }
    ]
  },
  {
    id: '2',
    shopId: '2',
    shopName: 'The Plant Shop',
    shopAvatar: 'https://images.pexels.com/photos/1964869/pexels-photo-1964869.jpeg',
    image: 'https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg',
    caption: 'Transform your space with our new collection of indoor plants 🌿',
    likes: 256,
    comments: 42,
    timestamp: '4h ago',
    products: [
      {
        id: 'p2',
        name: 'Monstera Deliciosa',
        price: '$45.00',
        image: 'https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg'
      }
    ]
  }
];

export const mockStories = [
  {
    id: '1',
    shopName: 'Urban Outfitters',
    imageUrl: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg'
  },
  {
    id: '2',
    shopName: 'The Plant Shop',
    imageUrl: 'https://images.pexels.com/photos/1964869/pexels-photo-1964869.jpeg'
  },
  {
    id: '3',
    shopName: 'Vintage Finds',
    imageUrl: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg'
  }
];

export const mockConversations = [
  {
    id: '1',
    shopName: 'Urban Outfitters',
    shopAvatar: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
    lastMessage: 'Your order has been shipped!',
    timestamp: '2h ago',
    unread: true
  },
  {
    id: '2',
    shopName: 'The Plant Shop',
    shopAvatar: 'https://images.pexels.com/photos/1964869/pexels-photo-1964869.jpeg',
    lastMessage: 'We have those plants in stock',
    timestamp: '1d ago',
    unread: false
  }
];
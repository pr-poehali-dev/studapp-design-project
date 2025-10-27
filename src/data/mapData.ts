export interface Place {
  id: number;
  name: string;
  category: 'Канцелярия' | 'Ксерокопия' | 'Еда' | 'Магазины' | 'Другое';
  position: { lat: number; lng: number };
  description?: string;
}

export interface Zone {
  id: number;
  name: string;
  color: 'green' | 'red';
  coordinates: Array<{ lat: number; lng: number }>;
}

export const placesData: Place[] = [
  {
    id: 1,
    name: 'Канцелярский магазин "Офис"',
    category: 'Канцелярия',
    position: { lat: 55.753215, lng: 37.622504 },
    description: 'Широкий выбор канцелярских товаров для студентов',
  },
  {
    id: 2,
    name: 'Копировальный центр "Принт"',
    category: 'Ксерокопия',
    position: { lat: 55.754215, lng: 37.621504 },
    description: 'Печать, ксерокопия, сканирование документов',
  },
  {
    id: 3,
    name: 'Столовая "Студенческая"',
    category: 'Еда',
    position: { lat: 55.752215, lng: 37.623504 },
    description: 'Вкусная и недорогая еда для студентов',
  },
  {
    id: 4,
    name: 'Кафе "Перекус"',
    category: 'Еда',
    position: { lat: 55.755215, lng: 37.620504 },
    description: 'Быстрые перекусы и кофе',
  },
  {
    id: 5,
    name: 'Продуктовый "У дома"',
    category: 'Магазины',
    position: { lat: 55.753715, lng: 37.624504 },
    description: 'Продукты и товары первой необходимости',
  },
  {
    id: 6,
    name: 'Книжный магазин',
    category: 'Магазины',
    position: { lat: 55.751215, lng: 37.622004 },
    description: 'Учебная литература и книги',
  },
];

export const zonesData: Zone[] = [
  {
    id: 1,
    name: 'Безопасная зона',
    color: 'green',
    coordinates: [
      { lat: 55.7545, lng: 37.6195 },
      { lat: 55.7545, lng: 37.6235 },
      { lat: 55.7515, lng: 37.6235 },
      { lat: 55.7515, lng: 37.6195 },
    ],
  },
  {
    id: 2,
    name: 'Зона ремонта',
    color: 'red',
    coordinates: [
      { lat: 55.7555, lng: 37.6245 },
      { lat: 55.7555, lng: 37.6265 },
      { lat: 55.7535, lng: 37.6265 },
      { lat: 55.7535, lng: 37.6245 },
    ],
  },
];

export const categoryColors = {
  'Канцелярия': '#3B82F6',
  'Ксерокопия': '#8B5CF6',
  'Еда': '#10B981',
  'Магазины': '#F59E0B',
  'Другое': '#6B7280',
};

export const categoryIcons = {
  'Канцелярия': 'Pencil',
  'Ксерокопия': 'Printer',
  'Еда': 'Utensils',
  'Магазины': 'ShoppingCart',
  'Другое': 'MapPin',
};

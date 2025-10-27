export const performanceData = [
  { month: 'Сен', score: 72 },
  { month: 'Окт', score: 78 },
  { month: 'Ноя', score: 85 },
  { month: 'Дек', score: 82 },
  { month: 'Янв', score: 88 },
  { month: 'Фев', score: 92 },
];

export const scheduleData = [
  { time: '09:00', subject: 'Математический анализ', room: 'Ауд. 201', type: 'lecture' },
  { time: '10:45', subject: 'Программирование', room: 'Комп. класс 3', type: 'practice' },
  { time: '13:00', subject: 'Английский язык', room: 'Ауд. 105', type: 'seminar' },
  { time: '14:45', subject: 'Физика', room: 'Ауд. 301', type: 'lecture' },
];

export const tasksData = [
  { id: 1, title: 'Лабораторная работа №5', subject: 'Программирование', deadline: '2 дня', priority: 'high', completed: false },
  { id: 2, title: 'Эссе: История России', subject: 'История', deadline: '5 дней', priority: 'medium', completed: false },
  { id: 3, title: 'Решение задач 12-24', subject: 'Математика', deadline: '1 неделя', priority: 'low', completed: false },
  { id: 4, title: 'Презентация проекта', subject: 'Физика', deadline: 'Завтра', priority: 'high', completed: false },
];

export const eventsData = [
  { id: 1, title: 'День открытых дверей', date: '15 ноября', icon: 'Users' },
  { id: 2, title: 'Научная конференция', date: '22 ноября', icon: 'BookOpen' },
  { id: 3, title: 'Спортивный турнир', date: '28 ноября', icon: 'Trophy' },
];

export const coursesData = [
  {
    id: 1,
    name: 'Программирование',
    teacher: 'Иванов И.И.',
    progress: 75,
    assignments: [
      { id: 1, title: 'Лабораторная работа №5: Массивы', deadline: '2024-11-20', status: 'in_progress', comment: '' },
      { id: 2, title: 'Лабораторная работа №4: Функции', deadline: '2024-11-15', status: 'completed', comment: 'Отлично! 5 баллов' },
      { id: 3, title: 'Лабораторная работа №3: Циклы', deadline: '2024-11-10', status: 'completed', comment: 'Хорошая работа. 4 балла' },
    ]
  },
  {
    id: 2,
    name: 'Математический анализ',
    teacher: 'Петрова А.С.',
    progress: 60,
    assignments: [
      { id: 4, title: 'Домашнее задание №8', deadline: '2024-11-22', status: 'not_started', comment: '' },
      { id: 5, title: 'Контрольная работа №2', deadline: '2024-11-18', status: 'in_progress', comment: '' },
    ]
  },
  {
    id: 3,
    name: 'Физика',
    teacher: 'Сидоров В.П.',
    progress: 85,
    assignments: [
      { id: 6, title: 'Презентация проекта', deadline: '2024-11-16', status: 'in_progress', comment: '' },
      { id: 7, title: 'Лабораторная №6', deadline: '2024-11-12', status: 'completed', comment: 'Отлично выполнено! 5' },
    ]
  },
];

export const worksData = [
  {
    id: 1,
    title: 'Курсовая работа: Алгоритмы сортировки',
    author: 'Алексей Смирнов',
    specialty: 'Программирование',
    type: 'Курсовая',
    subject: 'Информатика',
    rating: 4.8,
    downloads: 124,
    description: 'Подробный анализ алгоритмов сортировки с примерами кода на Python',
  },
  {
    id: 2,
    title: 'Реферат: Квантовая механика',
    author: 'Мария Петрова',
    specialty: 'Физика',
    type: 'Реферат',
    subject: 'Физика',
    rating: 4.5,
    downloads: 89,
    description: 'Основы квантовой механики и её применение в современной науке',
  },
  {
    id: 3,
    title: 'Дипломная работа: React приложения',
    author: 'Дмитрий Козлов',
    specialty: 'Программирование',
    type: 'Дипломная',
    subject: 'Веб-разработка',
    rating: 5.0,
    downloads: 203,
    description: 'Разработка современных веб-приложений с использованием React и TypeScript',
  },
  {
    id: 4,
    title: 'Лабораторная: Химический анализ',
    author: 'Анна Волкова',
    specialty: 'Химия',
    type: 'Лабораторная',
    subject: 'Химия',
    rating: 4.3,
    downloads: 67,
    description: 'Практический анализ химических реакций с подробными выводами',
  },
  {
    id: 5,
    title: 'Курсовая: Экономика России',
    author: 'Игорь Новиков',
    specialty: 'Экономика',
    type: 'Курсовая',
    subject: 'Экономика',
    rating: 4.6,
    downloads: 95,
    description: 'Анализ экономического развития России в XXI веке',
  },
  {
    id: 6,
    title: 'Реферат: Machine Learning',
    author: 'Елена Соколова',
    specialty: 'Программирование',
    type: 'Реферат',
    subject: 'ИИ',
    rating: 4.9,
    downloads: 156,
    description: 'Введение в машинное обучение и нейронные сети',
  },
];

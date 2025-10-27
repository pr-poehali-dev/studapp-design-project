import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const performanceData = [
  { month: 'Сен', score: 72 },
  { month: 'Окт', score: 78 },
  { month: 'Ноя', score: 85 },
  { month: 'Дек', score: 82 },
  { month: 'Янв', score: 88 },
  { month: 'Фев', score: 92 },
];

const scheduleData = [
  { time: '09:00', subject: 'Математический анализ', room: 'Ауд. 201', type: 'lecture' },
  { time: '10:45', subject: 'Программирование', room: 'Комп. класс 3', type: 'practice' },
  { time: '13:00', subject: 'Английский язык', room: 'Ауд. 105', type: 'seminar' },
  { time: '14:45', subject: 'Физика', room: 'Ауд. 301', type: 'lecture' },
];

const tasksData = [
  { id: 1, title: 'Лабораторная работа №5', subject: 'Программирование', deadline: '2 дня', priority: 'high', completed: false },
  { id: 2, title: 'Эссе: История России', subject: 'История', deadline: '5 дней', priority: 'medium', completed: false },
  { id: 3, title: 'Решение задач 12-24', subject: 'Математика', deadline: '1 неделя', priority: 'low', completed: false },
  { id: 4, title: 'Презентация проекта', subject: 'Физика', deadline: 'Завтра', priority: 'high', completed: false },
];

const eventsData = [
  { id: 1, title: 'День открытых дверей', date: '15 ноября', icon: 'Users' },
  { id: 2, title: 'Научная конференция', date: '22 ноября', icon: 'BookOpen' },
  { id: 3, title: 'Спортивный турнир', date: '28 ноября', icon: 'Trophy' },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [tasks, setTasks] = useState(tasksData);

  const toggleTaskComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lecture': return 'BookOpen';
      case 'practice': return 'Code';
      case 'seminar': return 'MessageSquare';
      default: return 'Calendar';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">StudApp</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              <Button
                variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
                className="gap-2"
                onClick={() => setActiveTab('dashboard')}
              >
                <Icon name="LayoutDashboard" size={18} />
                Главная
              </Button>
              <Button
                variant={activeTab === 'learning' ? 'default' : 'ghost'}
                className="gap-2"
                onClick={() => setActiveTab('learning')}
              >
                <Icon name="BookOpen" size={18} />
                Дистанционное обучение
              </Button>
              <Button
                variant={activeTab === 'market' ? 'default' : 'ghost'}
                className="gap-2"
                onClick={() => setActiveTab('market')}
              >
                <Icon name="ShoppingBag" size={18} />
                Минимаркет
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                ИП
              </div>
            </div>
          </div>
        </div>
      </header>

      {activeTab === 'dashboard' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Добро пожаловать, Иван! 👋</h2>
            <p className="text-gray-600 mt-1">Вот что происходит сегодня</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" className="text-primary" size={24} />
                  Расписание на сегодня
                </CardTitle>
                <Badge variant="outline">4 пары</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scheduleData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="flex flex-col items-center justify-center min-w-[60px]">
                        <span className="text-sm font-semibold text-primary">{item.time}</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={getTypeIcon(item.type)} className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{item.subject}</p>
                        <p className="text-sm text-gray-600">{item.room}</p>
                      </div>
                      <Badge variant="secondary" className="capitalize">
                        {item.type === 'lecture' && 'Лекция'}
                        {item.type === 'practice' && 'Практика'}
                        {item.type === 'seminar' && 'Семинар'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bell" className="text-primary" size={24} />
                  Уведомления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="text-blue-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Через 30 минут</p>
                        <p className="text-xs text-blue-700">Математический анализ в Ауд. 201</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-orange-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-medium text-orange-900">Дедлайн завтра</p>
                        <p className="text-xs text-orange-700">Презентация проекта по физике</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="text-green-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-medium text-green-900">Оценка выставлена</p>
                        <p className="text-xs text-green-700">Лабораторная №4: Отлично (5)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ListTodo" className="text-primary" size={24} />
                  Текущие задачи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                        task.completed
                          ? 'bg-gray-50 border-gray-200 opacity-60'
                          : 'border-gray-200 hover:border-primary hover:bg-primary/5'
                      }`}
                    >
                      <button
                        onClick={() => toggleTaskComplete(task.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          task.completed
                            ? 'bg-primary border-primary'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                      >
                        {task.completed && <Icon name="Check" className="text-white" size={14} />}
                      </button>
                      <div className="flex-1">
                        <p className={`font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {task.title}
                        </p>
                        <p className="text-sm text-gray-600">{task.subject}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
                        <span className="text-xs text-gray-600">{task.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                  ИИ-аналитика успеваемости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Средний балл</span>
                    <span className="text-2xl font-bold text-primary">4.6</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div className="h-48 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#0EA5E9"
                        strokeWidth={2}
                        fill="url(#colorScore)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-blue-600 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">Рекомендация ИИ</p>
                      <p className="text-xs text-blue-700">
                        Отличная динамика! Ваша успеваемость выросла на 20% за последние 6 месяцев. 
                        Продолжайте уделять внимание практическим заданиям.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Megaphone" className="text-primary" size={24} />
                Анонсы мероприятий
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventsData.map((event) => (
                  <div
                    key={event.id}
                    className="p-6 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={event.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {event.date}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      )}

      {activeTab === 'learning' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <Icon name="BookOpen" className="mx-auto text-primary mb-4" size={64} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Дистанционное обучение</h2>
            <p className="text-gray-600">Этот раздел в разработке</p>
          </div>
        </main>
      )}

      {activeTab === 'market' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <Icon name="ShoppingBag" className="mx-auto text-primary mb-4" size={64} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Минимаркет работ</h2>
            <p className="text-gray-600">Этот раздел в разработке</p>
          </div>
        </main>
      )}

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2024 StudApp. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Поддержка</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Документация</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

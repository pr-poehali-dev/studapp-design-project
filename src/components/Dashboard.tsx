import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface Task {
  id: number;
  title: string;
  subject: string;
  deadline: string;
  priority: string;
  completed: boolean;
}

interface DashboardProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  scheduleData: Array<{ time: string; subject: string; room: string; type: string }>;
  eventsData: Array<{ id: number; title: string; date: string; icon: string }>;
  performanceData: Array<{ month: string; score: number }>;
  getTypeIcon: (type: string) => string;
  getPriorityColor: (priority: string) => string;
}

export default function Dashboard({
  tasks,
  onToggleTask,
  scheduleData,
  eventsData,
  performanceData,
  getTypeIcon,
  getPriorityColor,
}: DashboardProps) {
  return (
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
                    onClick={() => onToggleTask(task.id)}
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
  );
}

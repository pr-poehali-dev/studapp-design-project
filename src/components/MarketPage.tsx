import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Work {
  id: number;
  title: string;
  author: string;
  specialty: string;
  type: string;
  subject: string;
  rating: number;
  downloads: number;
  description: string;
}

interface MarketPageProps {
  worksData: Work[];
  filterSpecialty: string;
  filterType: string;
  filterSubject: string;
  onFilterChange: (filter: string, value: string) => void;
}

export default function MarketPage({
  worksData,
  filterSpecialty,
  filterType,
  filterSubject,
  onFilterChange,
}: MarketPageProps) {
  const filteredWorks = worksData.filter(
    (work) =>
      (filterSpecialty === 'Все' || work.specialty === filterSpecialty) &&
      (filterType === 'Все' || work.type === filterType) &&
      (filterSubject === 'Все' || work.subject === filterSubject)
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Минимаркет работ</h2>
            <p className="text-gray-600 mt-1">Студенческие работы и материалы</p>
          </div>
          <Button className="gap-2">
            <Icon name="Plus" size={18} />
            Добавить работу
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Специальность</label>
              <select
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filterSpecialty}
                onChange={(e) => onFilterChange('specialty', e.target.value)}
              >
                <option>Все</option>
                <option>Программирование</option>
                <option>Физика</option>
                <option>Химия</option>
                <option>Экономика</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Тип работы</label>
              <select
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filterType}
                onChange={(e) => onFilterChange('type', e.target.value)}
              >
                <option>Все</option>
                <option>Курсовая</option>
                <option>Дипломная</option>
                <option>Реферат</option>
                <option>Лабораторная</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Предмет</label>
              <select
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filterSubject}
                onChange={(e) => onFilterChange('subject', e.target.value)}
              >
                <option>Все</option>
                <option>Информатика</option>
                <option>Физика</option>
                <option>Химия</option>
                <option>Экономика</option>
                <option>Веб-разработка</option>
                <option>ИИ</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <Card key={work.id} className="hover:shadow-lg transition-all group flex flex-col">
            <CardHeader>
              <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-blue-200 transition-all">
                <Icon name="FileText" className="text-primary" size={48} />
              </div>
              <CardTitle className="text-lg line-clamp-2">{work.title}</CardTitle>
              <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                <Icon name="User" size={14} />
                {work.author}
              </p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{work.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">{work.specialty}</Badge>
                <Badge variant="secondary">{work.type}</Badge>
                <Badge variant="outline">{work.subject}</Badge>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4 mt-auto">
                <div className="flex items-center gap-1">
                  <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  <span className="font-semibold">{work.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Download" size={16} />
                  <span>{work.downloads}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  <Icon name="Eye" size={16} />
                  Подробнее
                </Button>
                <Button className="flex-1 gap-2">
                  <Icon name="Download" size={16} />
                  Скачать
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-20">
          <Icon name="Search" className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
          <p className="text-gray-600">Попробуйте изменить фильтры</p>
        </div>
      )}
    </main>
  );
}

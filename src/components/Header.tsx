import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
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
              onClick={() => onTabChange('dashboard')}
            >
              <Icon name="LayoutDashboard" size={18} />
              Главная
            </Button>
            <Button
              variant={activeTab === 'learning' ? 'default' : 'ghost'}
              className="gap-2"
              onClick={() => onTabChange('learning')}
            >
              <Icon name="BookOpen" size={18} />
              Дистанционное обучение
            </Button>
            <Button
              variant={activeTab === 'market' ? 'default' : 'ghost'}
              className="gap-2"
              onClick={() => onTabChange('market')}
            >
              <Icon name="ShoppingBag" size={18} />
              Минимаркет
            </Button>
            <Button
              variant={activeTab === 'map' ? 'default' : 'ghost'}
              className="gap-2"
              onClick={() => onTabChange('map')}
            >
              <Icon name="Map" size={18} />
              Карта
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
  );
}
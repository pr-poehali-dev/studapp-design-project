import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';
import LearningPage from '@/components/LearningPage';
import MarketPage from '@/components/MarketPage';
import MapPage from '@/components/MapPage';
import {
  performanceData,
  scheduleData,
  tasksData,
  eventsData,
  coursesData,
  worksData,
} from '@/data/mockData';

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [tasks, setTasks] = useState(tasksData);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [filterSpecialty, setFilterSpecialty] = useState('Все');
  const [filterType, setFilterType] = useState('Все');
  const [filterSubject, setFilterSubject] = useState('Все');

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

  const handleFilterChange = (filter: string, value: string) => {
    if (filter === 'specialty') setFilterSpecialty(value);
    if (filter === 'type') setFilterType(value);
    if (filter === 'subject') setFilterSubject(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'dashboard' && (
        <Dashboard
          tasks={tasks}
          onToggleTask={toggleTaskComplete}
          scheduleData={scheduleData}
          eventsData={eventsData}
          performanceData={performanceData}
          getTypeIcon={getTypeIcon}
          getPriorityColor={getPriorityColor}
        />
      )}

      {activeTab === 'learning' && (
        <LearningPage
          coursesData={coursesData}
          selectedCourse={selectedCourse}
          onSelectCourse={setSelectedCourse}
        />
      )}

      {activeTab === 'market' && (
        <MarketPage
          worksData={worksData}
          filterSpecialty={filterSpecialty}
          filterType={filterType}
          filterSubject={filterSubject}
          onFilterChange={handleFilterChange}
        />
      )}

      {activeTab === 'map' && <MapPage />}

      <Footer />
    </div>
  );
}
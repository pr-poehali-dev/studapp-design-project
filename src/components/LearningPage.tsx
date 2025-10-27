import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Course {
  id: number;
  name: string;
  teacher: string;
  progress: number;
  assignments: Array<{
    id: number;
    title: string;
    deadline: string;
    status: string;
    comment: string;
  }>;
}

interface LearningPageProps {
  coursesData: Course[];
  selectedCourse: number | null;
  onSelectCourse: (courseId: number | null) => void;
}

export default function LearningPage({ coursesData, selectedCourse, onSelectCourse }: LearningPageProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Дистанционное обучение</h2>
        <p className="text-gray-600 mt-1">Ваши курсы и задания</p>
      </div>

      {selectedCourse === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <Card
              key={course.id}
              className="hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onSelectCourse(course.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="BookOpen" className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline">{course.assignments.length} заданий</Badge>
                </div>
                <CardTitle className="text-xl">{course.name}</CardTitle>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                  <Icon name="User" size={14} />
                  {course.teacher}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Прогресс</span>
                    <span className="font-semibold text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  
                  <div className="pt-4 flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                    Открыть курс
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => onSelectCourse(null)}
          >
            <Icon name="ArrowLeft" size={18} />
            Назад к курсам
          </Button>

          {coursesData
            .filter((course) => course.id === selectedCourse)
            .map((course) => (
              <div key={course.id}>
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{course.name}</CardTitle>
                        <p className="text-gray-600 flex items-center gap-2">
                          <Icon name="User" size={16} />
                          Преподаватель: {course.teacher}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary mb-1">{course.progress}%</div>
                        <Progress value={course.progress} className="w-32 h-2" />
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="space-y-4">
                  {course.assignments.map((assignment) => (
                    <Card
                      key={assignment.id}
                      className={`hover:shadow-lg transition-all ${
                        assignment.status === 'completed' ? 'bg-green-50/50' : ''
                      }`}
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  assignment.status === 'completed'
                                    ? 'bg-green-100'
                                    : assignment.status === 'in_progress'
                                    ? 'bg-yellow-100'
                                    : 'bg-gray-100'
                                }`}
                              >
                                <Icon
                                  name={
                                    assignment.status === 'completed'
                                      ? 'CheckCircle'
                                      : assignment.status === 'in_progress'
                                      ? 'Clock'
                                      : 'Circle'
                                  }
                                  className={
                                    assignment.status === 'completed'
                                      ? 'text-green-600'
                                      : assignment.status === 'in_progress'
                                      ? 'text-yellow-600'
                                      : 'text-gray-400'
                                  }
                                  size={20}
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 text-lg">{assignment.title}</h3>
                                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                                  <Icon name="Calendar" size={14} />
                                  Дедлайн: {new Date(assignment.deadline).toLocaleDateString('ru-RU')}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                              <Badge
                                variant={
                                  assignment.status === 'completed'
                                    ? 'default'
                                    : assignment.status === 'in_progress'
                                    ? 'secondary'
                                    : 'outline'
                                }
                                className={
                                  assignment.status === 'completed'
                                    ? 'bg-green-500'
                                    : assignment.status === 'in_progress'
                                    ? 'bg-yellow-500'
                                    : ''
                                }
                              >
                                {assignment.status === 'completed' && 'Сдано'}
                                {assignment.status === 'in_progress' && 'В работе'}
                                {assignment.status === 'not_started' && 'Не начато'}
                              </Badge>
                            </div>

                            {assignment.comment && (
                              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 mt-3">
                                <p className="text-sm font-medium text-blue-900 mb-1 flex items-center gap-2">
                                  <Icon name="MessageSquare" size={14} />
                                  Комментарий преподавателя:
                                </p>
                                <p className="text-sm text-blue-700">{assignment.comment}</p>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col gap-2">
                            {assignment.status !== 'completed' && (
                              <Button className="gap-2">
                                <Icon name="Upload" size={16} />
                                Загрузить файл
                              </Button>
                            )}
                            {assignment.status === 'completed' && (
                              <Button variant="outline" className="gap-2">
                                <Icon name="Download" size={16} />
                                Скачать
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </main>
  );
}

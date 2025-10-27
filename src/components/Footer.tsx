export default function Footer() {
  return (
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
  );
}

import {
  Code2,
  Layout,
  Server,
  Settings,
  Shield,
  Smartphone
} from 'lucide-react';

const skills = [
  {
    category: 'Sites Institucionais',
    icon: Layout,
    items: ['Design Moderno', 'Responsivo', 'Otimizado', 'Rápido']
  },
  {
    category: 'Lojas Virtuais',
    icon: Server,
    items: ['Catálogo', 'Pagamentos', 'Gestão', 'Relatórios']
  },
  {
    category: 'Sistemas Web',
    icon: Settings,
    items: ['Personalizado', 'Intuitivo', 'Seguro', 'Escalável']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Soluções
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
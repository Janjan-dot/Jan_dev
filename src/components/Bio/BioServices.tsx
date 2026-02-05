import { Code2, Layout, Server } from 'lucide-react';

const services = [
  {
    title: 'Sites Profissionais',
    description: 'Sites modernos e responsivos para melhorar a presença digital da sua empresa',
    icon: Layout,
    features: ['Design Moderno', 'Otimizado para Google', 'Responsivo', 'Rápido']
  },
  {
    title: 'Lojas Virtuais',
    description: 'Venda seus produtos online com uma loja virtual completa e fácil de gerenciar',
    icon: Server,
    features: ['Catálogo Digital', 'Pagamentos Online', 'Gestão de Pedidos', 'Relatórios']
  },
  {
    title: 'Sistemas Web',
    description: 'Sistemas personalizados para automatizar e melhorar os processos da sua empresa',
    icon: Code2,
    features: ['Personalizado', 'Fácil de Usar', 'Seguro', 'Suporte Técnico']
  }
];

export function BioServices() {
  return (
    <div className="my-12">
      <div className="space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
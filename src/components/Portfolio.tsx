import { Globe, ShoppingCart, LayoutDashboard, Briefcase, Building2, Laptop } from 'lucide-react';

const projects = [
  {
    title: 'Site para Restaurante',
    description: 'Site moderno com cardápio digital e sistema de pedidos online',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400&h=300',
    features: ['Cardápio Digital', 'Pedidos Online', 'Responsivo'],
    type: 'Restaurante'
  },
  {
    title: 'Loja de Roupas Online',
    description: 'E-commerce completo com gestão de produtos e vendas',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400&h=300',
    features: ['Catálogo', 'Pagamentos', 'Gestão'],
    type: 'E-commerce'
  },
  {
    title: 'Sistema para Clínica',
    description: 'Sistema de agendamento e gestão de pacientes',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300',
    features: ['Agendamento', 'Prontuários', 'Relatórios'],
    type: 'Saúde'
  },
  {
    title: 'Site para Escritório',
    description: 'Site institucional moderno para escritório de advocacia',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300',
    features: ['Institucional', 'Blog', 'Área do Cliente'],
    type: 'Jurídico'
  },
  {
    title: 'Loja de Móveis',
    description: 'Catálogo digital com sistema de orçamentos online',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400&h=300',
    features: ['Catálogo', 'Orçamentos', 'WhatsApp'],
    type: 'Móveis'
  },
  {
    title: 'Sistema para Escola',
    description: 'Portal educacional com área do aluno e professores',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400&h=300',
    features: ['Portal', 'Notas', 'Material'],
    type: 'Educação'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Projetos Realizados
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Conheça alguns exemplos de projetos que desenvolvemos para nossos clientes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-sm font-medium text-gray-900 dark:text-white rounded-full">
                  {project.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
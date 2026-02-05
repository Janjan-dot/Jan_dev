import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            Projetos Realizados
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Conheça alguns exemplos de projetos que desenvolvemos para nossos clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
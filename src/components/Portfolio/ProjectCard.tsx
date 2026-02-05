import { type ProjectType } from './types';

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-4 left-4 px-4 py-1.5 bg-white/95 dark:bg-gray-900/95 text-sm font-medium text-gray-900 dark:text-white rounded-full shadow-md">
          {project.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full transition-colors duration-300"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
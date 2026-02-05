interface ServiceSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const services = [
  'Site Profissional',
  'Loja Virtual',
  'Sistema Web Personalizado',
  'Landing Page',
  'Blog',
  'Outro'
];

export function ServiceSelect({ value, onChange }: ServiceSelectProps) {
  return (
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Serviço Desejado
      </label>
      <select
        id="service"
        name="service"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
      >
        {services.map(service => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
}
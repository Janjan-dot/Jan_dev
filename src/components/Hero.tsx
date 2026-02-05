import { TypewriterEffect } from './TypewriterEffect';
import { MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&h=500"
              alt="Janio Gabriel"
              className="rounded-full w-64 h-64 object-cover mx-auto lg:mx-0 shadow-xl ring-4 ring-blue-500/20"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Janio Gabriel
            </h1>
            <TypewriterEffect text="Desenvolvedor Web" />
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 mb-8">
              Criando sites profissionais e sistemas web para impulsionar seu negócio
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um orçamento para um site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
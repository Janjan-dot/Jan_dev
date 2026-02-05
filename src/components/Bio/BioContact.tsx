import { MessageCircle } from 'lucide-react';

export function BioContact() {
  return (
    <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Vamos conversar sobre seu projeto?
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        Faça um orçamento sem compromisso e descubra como podemos 
        melhorar a presença digital da sua empresa.
      </p>
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um orçamento para um site."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        Solicitar Orçamento via WhatsApp
      </a>
    </div>
  );
}
import { WhatsAppForm } from './WhatsAppForm';
import { ContactInfo } from './ContactInfo';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Solicite um Orçamento
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <WhatsAppForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
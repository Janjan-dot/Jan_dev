import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ServiceSelect } from './ServiceSelect';
import { ContactForm } from './ContactForm';

export function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: 'Site Profissional',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Me chamo ${formData.name} da empresa ${formData.business}. 
Tenho interesse em ${formData.service}.
${formData.message}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 text-green-500" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Fale conosco pelo WhatsApp
        </h3>
      </div>
      
      <ContactForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
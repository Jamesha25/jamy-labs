import React from 'react';
import { siteData } from '@/app/lib/site-data';
import { WhatsAppIcon } from './icons';

export function WhatsAppCTA() {
  const whatsappNumber = siteData.contact.phone.replace(/[^0-9]/g, '');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
}

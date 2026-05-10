import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770';
  const message = 'Bonjour Darius, je souhaite un audit gratuit pour mon entreprise.';
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center bg-success text-paper shadow-lg transition-all duration-300 hover:shadow-xl group"
      style={{
        borderRadius: isHovered ? '28px' : '50%',
        height: '56px',
        padding: isHovered ? '0 24px' : '0',
        width: isHovered ? 'auto' : '56px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7 flex-shrink-0" />
      <span
        className={`font-sans font-medium text-[15px] overflow-hidden whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'w-auto max-w-xs ml-3 opacity-100' : 'w-0 max-w-0 opacity-0'
        }`}
      >
        Discutons sur WhatsApp
      </span>
    </a>
  );
}

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770';
  const message = 'Bonjour Darius, je souhaite un audit gratuit pour mon entreprise.';
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Discuter sur WhatsApp (s'ouvre dans un nouvel onglet)"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="wa-label" aria-hidden="true">Discuter sur WhatsApp</span>
    </a>
  );
}

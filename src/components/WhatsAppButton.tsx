import { MessageCircle } from "lucide-react";

interface Props {
  number?: string;
  message?: string;
}

const WhatsAppButton = ({ number = "59171234567", message = "¡Hola! Me gustaría hacer un pedido" }: Props) => {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      aria-label="Pedir por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-body font-semibold hidden sm:inline">Pedir por WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

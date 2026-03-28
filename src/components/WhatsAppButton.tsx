import { MessageCircle } from "lucide-react";
import { openExternalLink } from "@/lib/openLink";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/8801999708880";
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => openExternalLink(whatsappUrl, e)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 whatsapp-float"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChatbot from "@/components/AIChatbot";
import { useSiteContent, useMenuItems, useSiteSettings } from "@/hooks/useSiteData";

const Index = () => {
  const { data: content } = useSiteContent();
  const { data: menuItems } = useMenuItems();
  const { data: settings } = useSiteSettings();

  return (
    <div className="min-h-screen bg-background">
      <Navbar name={settings?.restaurant_name} />
      <HeroSection
        title={content?.hero?.title}
        subtitle={content?.hero?.subtitle}
        description={content?.hero?.description}
      />
      <MenuSection
        title={content?.menu_header?.title}
        subtitle={content?.menu_header?.subtitle}
        items={menuItems || []}
      />
      <AboutSection
        title={content?.about?.title}
        description={content?.about?.description}
      />
      <Footer name={settings?.restaurant_name} />
      <WhatsAppButton number={settings?.whatsapp_number} message={settings?.whatsapp_message} />
      <AIChatbot />
    </div>
  );
};

export default Index;

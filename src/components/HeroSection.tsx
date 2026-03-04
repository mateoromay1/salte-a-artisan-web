import heroImg from "@/assets/saltena-hero.webp";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroSection = ({ title = "El Salteñero", subtitle = "¡Pruebas una y no paras!", description }: Props) => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-dark-brown">
    <div className="absolute inset-0 flex items-center justify-center">
      <img src={heroImg} alt="El Salteñero - Empanadas Bolivianas" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark-brown/50" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
        {title}
      </h1>
      <p className="font-display text-xl md:text-2xl text-cream italic mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
        {subtitle}
      </p>
      {description && (
        <p className="font-body text-cream/80 text-lg max-w-xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default HeroSection;

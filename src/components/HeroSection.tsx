import heroImg from "@/assets/saltena-hero.webp";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroSection = ({ title = "El Salteñero", subtitle = "¡Pruebas una y no paras!", description }: Props) => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="El Salteñero - Empanadas Bolivianas" className="w-full h-full object-contain bg-card" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/40 via-transparent to-background/90" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up mt-[30vh]">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight drop-shadow-lg">
        {title}
      </h1>
      <p className="font-display text-xl md:text-2xl text-cream/90 italic mb-6 drop-shadow-md">
        {subtitle}
      </p>
      {description && (
        <p className="font-body text-cream/75 text-lg max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default HeroSection;

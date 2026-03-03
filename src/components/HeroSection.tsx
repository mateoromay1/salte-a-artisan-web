import heroImg from "@/assets/saltena-hero.webp";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroSection = ({ title = "Salteñas Doña Rosa", subtitle = "El sabor auténtico de Bolivia", description }: Props) => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Salteñas bolivianas artesanales" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/70 via-dark-brown/50 to-background" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
      <div className="inline-block mb-4 px-4 py-1 border border-cream/40 rounded-full">
        <span className="text-cream/80 text-sm font-body tracking-widest uppercase">Empanadas Bolivianas</span>
      </div>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight">
        {title}
      </h1>
      <p className="font-display text-xl md:text-2xl text-cream/90 italic mb-6">
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

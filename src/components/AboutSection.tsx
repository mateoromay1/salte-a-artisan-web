interface Props {
  title?: string;
  description?: string;
}

const AboutSection = ({ title = "Nuestra Historia", description }: Props) => (
  <section id="nosotros" className="py-20 px-6 bg-background">
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-accent text-sm font-body tracking-widest uppercase">~ Sobre Nosotros ~</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{title}</h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
      {description && (
        <p className="text-muted-foreground font-body text-lg leading-relaxed">{description}</p>
      )}
    </div>
  </section>
);

export default AboutSection;

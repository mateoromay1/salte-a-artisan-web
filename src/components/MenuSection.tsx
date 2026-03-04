import ref1 from "@/assets/saltena-ref1.jpg";
import ref2 from "@/assets/saltena-ref2.jpg";
import ref3 from "@/assets/saltena-ref3.jpg";
import ref4 from "@/assets/saltena-ref4.jpg";

interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  items: MenuItem[];
}

const gallery = [
  { src: ref1, alt: "Salteña individual artesanal" },
  { src: ref2, alt: "Caja de 4 salteñas" },
  { src: ref3, alt: "Caja El Salteñero con logo" },
  { src: ref4, alt: "Caja grande de salteñas" },
];

const MenuSection = ({ title = "Nuestro Menú", subtitle, items }: Props) => {
  const salteñas = items.filter(i => i.category === "salteñas");
  const bebidas = items.filter(i => i.category === "bebidas");

  return (
    <section id="menu" className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-body tracking-widest uppercase">~ Carta ~</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground font-body mt-3 text-lg">{subtitle}</p>}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {gallery.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg border-2 border-secondary aspect-square">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Items */}
        <div className="max-w-2xl mx-auto space-y-8">
          {salteñas.length > 0 && (
            <div>
              <h3 className="font-display text-2xl text-primary mb-4 border-b border-border pb-2">🥟 Salteñas</h3>
              <div className="space-y-4">
                {salteñas.map(item => (
                  <div key={item.id} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">{item.name}</h4>
                      {item.description && <p className="text-muted-foreground text-sm font-body">{item.description}</p>}
                    </div>
                    <span className="font-display text-lg font-bold text-accent whitespace-nowrap">S/ {item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bebidas.length > 0 && (
            <div>
              <h3 className="font-display text-2xl text-primary mb-4 border-b border-border pb-2">☕ Bebidas</h3>
              <div className="space-y-4">
                {bebidas.map(item => (
                  <div key={item.id} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">{item.name}</h4>
                      {item.description && <p className="text-muted-foreground text-sm font-body">{item.description}</p>}
                    </div>
                    <span className="font-display text-lg font-bold text-accent whitespace-nowrap">S/ {item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

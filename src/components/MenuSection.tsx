import menuImg from "@/assets/saltena-menu.webp";

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-secondary">
            <img src={menuImg} alt="Salteñas frescas" className="w-full h-80 object-cover" />
          </div>

          {/* Items */}
          <div className="space-y-8">
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
      </div>
    </section>
  );
};

export default MenuSection;

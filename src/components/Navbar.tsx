import { useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  name?: string;
}

const Navbar = ({ name = "Salteñas Doña Rosa" }: Props) => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Menú", href: "#menu" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold text-primary">{name}</a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-body text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-body text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

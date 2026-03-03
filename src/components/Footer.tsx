const Footer = ({ name = "Salteñas Doña Rosa" }: { name?: string }) => (
  <footer className="py-8 px-6 bg-primary text-primary-foreground text-center">
    <p className="font-display text-lg font-semibold">{name}</p>
    <p className="font-body text-sm opacity-75 mt-1">El sabor auténtico de Bolivia 🇧🇴</p>
    <p className="font-body text-xs opacity-50 mt-4">© {new Date().getFullYear()} Todos los derechos reservados</p>
  </footer>
);

export default Footer;

import { MapPin, Clock, Phone } from "lucide-react";

interface Props {
  settings: Record<string, string>;
}

const InfoSection = ({ settings }: Props) => (
  <section id="contacto" className="py-20 px-6 bg-card">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-accent text-sm font-body tracking-widest uppercase">~ Encuéntranos ~</span>
      <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-10">Información</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Dirección</h3>
          <p className="text-muted-foreground font-body text-sm">{settings.address || "La Paz, Bolivia"}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Horario</h3>
          <p className="text-muted-foreground font-body text-sm">{settings.hours || "7:00 AM - 12:00 PM"}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">Teléfono</h3>
          <p className="text-muted-foreground font-body text-sm">{settings.phone || "+591 7 123 4567"}</p>
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;

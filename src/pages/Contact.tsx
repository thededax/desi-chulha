import { TableReservationHub } from "../components/TableReservationHub";
import { Flame, Phone, MapPin, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-espresso-textured min-h-screen text-[#F6F3EC] pt-24 pb-20">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-3">
          <Flame className="w-3.5 h-3.5 text-[#B84A1B]" />
          <span>Warm Hospitality & Banquets</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F6F3EC] mb-4">
          Reserve & <span className="italic font-normal text-[#FAE88A]">Get in Touch</span>
        </h1>
        <p className="text-sm md:text-base text-[#D1C7B7] max-w-2xl mx-auto leading-relaxed">
          Planning a family get-together, birthday feast, or corporate lunch? Fill out the reservation form below or call us directly.
        </p>
      </div>

      {/* Embedded Table Reservation Hub */}
      <TableReservationHub />
    </div>
  );
}

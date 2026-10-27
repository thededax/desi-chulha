import { TableReservationHub } from "../components/TableReservationHub";
import { Flame } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-espresso-textured min-h-screen text-[#F6F3EC] pt-16 sm:pt-24 pb-12 sm:pb-20">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-4 pb-4 sm:pt-8 sm:pb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FAE88A] mb-2 sm:mb-3">
          <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B84A1B]" />
          <span>Warm Hospitality & Banquets</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#F6F3EC] mb-2 sm:mb-4">
          Reserve & <span className="italic font-normal text-[#FAE88A]">Get in Touch</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#D1C7B7] max-w-2xl mx-auto leading-relaxed">
          Planning a family get-together, birthday feast, or corporate lunch? Fill out the reservation form below or call us directly.
        </p>
      </div>

      {/* Embedded Table Reservation Hub */}
      <TableReservationHub />
    </div>
  );
}

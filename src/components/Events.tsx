import { motion } from "motion/react";

const events = [
  { date: "May 15", month: "2026", title: "Atmosphere of Worship", location: "O2 Indigo, London", time: "6:00 PM", type: "Concert" },
  { date: "Jun 02", month: "2026", title: "Sunday Live Ministration", location: "RCCG House of Favour, Lagos", time: "8:00 AM", type: "Church Service" },
  { date: "Jul 20", month: "2026", title: "Spirit & Truth Tour", location: "Madison Square, NYC", time: "7:30 PM", type: "Tour" }
];

export function Events() {
  return (
    <section id="events" className="py-24 bg-bg border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-glass-border pb-10">
          <div>
            <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Monthly Calendar</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold italic text-ink">Upcoming Ministrations</h3>
          </div>
          <p className="max-w-xs text-ink/40 text-sm italic hidden md:block">
            Come and experience the power of God through anointed music and worship.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-gold transition-all duration-500 flex flex-col md:flex-row items-center gap-10 rounded-none overflow-hidden relative shadow-lg"
            >
              <div className="text-center md:text-left shrink-0">
                <span className="block font-serif text-4xl font-bold text-gold">{event.date.split(' ')[1]}</span>
                <span className="block text-xs uppercase tracking-widest text-ink/40 group-hover:text-ink/60 transition-colors">{event.date.split(' ')[0]} {event.month}</span>
              </div>

              <div className="grow text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-widest mb-3 rounded-none border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                  {event.type}
                </span>
                <h4 className="text-2xl font-serif font-bold italic text-ink">
                  {event.title}
                </h4>
                <p className="text-ink/40 text-sm mt-1 group-hover:text-ink/60 transition-colors">
                  {event.location} • {event.time}
                </p>
              </div>

              <div className="shrink-0 flex flex-col md:flex-row gap-4">
                 <button className="px-8 py-3 bg-gold text-black text-xs uppercase tracking-widest font-bold hover:bg-gold-light transition-all duration-300 rounded-none border border-gold">
                   Get Tickets
                 </button>
                 <button className="px-8 py-3 border border-glass-border text-ink text-xs uppercase tracking-widest font-medium hover:bg-glass transition-all duration-300 rounded-none">
                   Details
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

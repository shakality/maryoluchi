import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

const videos = [
  { id: 1, title: "God is Here (Live Worship)", duration: "08:24", thumbnail: "https://picsum.photos/seed/vid1/800/450" },
  { id: 2, title: "Mercy Reaches (Official Video)", duration: "05:12", thumbnail: "https://picsum.photos/seed/vid2/800/450" },
  { id: 3, title: "Zion's Song (Studio Session)", duration: "04:45", thumbnail: "https://picsum.photos/seed/vid3/800/450" }
];

export function Videos() {
  return (
    <section id="videos" className="py-32 bg-bg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Visual Ministry</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-light text-white tracking-tight">Watch & Pray</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {videos.map((vid, index) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden mb-6 bg-white/5">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover transition-all duration-1000 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                    <PlayCircle className="text-white w-6 h-6" strokeWidth={1} />
                  </div>
                </div>
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mb-2">{vid.duration}</p>
              <h4 className="font-serif text-xl font-light text-white group-hover:text-gold transition-colors">{vid.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const events = [
  { date: "May 15", month: "2026", title: "Atmosphere of Worship", location: "O2 Indigo, London", time: "6:00 PM", type: "Concert" },
  { date: "Jun 02", month: "2026", title: "Sunday Live Ministration", location: "RCCG House of Favour, Lagos", time: "8:00 AM", type: "Church Service" },
  { date: "Jul 20", month: "2026", title: "Spirit & Truth Tour", location: "Madison Square, NYC", time: "7:30 PM", type: "Tour" }
];

export function Events() {
  return (
    <section id="events" className="py-32 bg-bg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Monthly Calendar</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-light text-white tracking-tight">Upcoming Events</h3>
          </div>
          <p className="max-w-xs text-white/20 text-xs italic font-light leading-relaxed">
            Experience the power of God through anointed music and collective worship in these locations.
          </p>
        </div>

        <div className="divide-y divide-white/5">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-12 group flex flex-col md:flex-row items-center gap-12 transition-all duration-500"
            >
              <div className="text-center md:text-left shrink-0 w-24">
                <span className="block font-serif text-4xl font-light text-white group-hover:text-gold transition-colors">{event.date.split(' ')[1]}</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-colors">{event.date.split(' ')[0]} {event.month}</span>
              </div>

              <div className="grow text-center md:text-left">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 block font-medium">
                  {event.type}
                </span>
                <h4 className="text-2xl md:text-3xl font-serif font-light text-white group-hover:text-gold transition-colors">
                  {event.title}
                </h4>
                <p className="text-white/20 text-sm mt-3 font-light tracking-wide">
                  {event.location} • {event.time}
                </p>
              </div>

              <div className="shrink-0">
                 <button className="px-12 py-5 border border-white/10 text-white/60 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 hover:bg-gold hover:text-black hover:border-gold">
                   Booking Enquiry
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

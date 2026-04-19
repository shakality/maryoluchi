import { motion } from "motion/react";
import { Search } from "lucide-react";
import { useState } from "react";

const photos = [
  "https://picsum.photos/seed/gal1/800/800",
  "https://picsum.photos/seed/gal2/800/1000",
  "https://picsum.photos/seed/gal3/800/600",
  "https://picsum.photos/seed/gal4/800/800",
  "https://picsum.photos/seed/gal5/800/1000",
  "https://picsum.photos/seed/gal6/800/1200",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-bg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Moments of Faith</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-light text-white tracking-tight">Ministry in Pictures</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(photo)}
              className="relative group cursor-pointer overflow-hidden rounded-sm break-inside-avoid"
            >
              <img
                src={photo}
                alt={`Worship Moment ${index + 1}`}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Search className="text-gold w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Basic Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
}

const testimonials = [
  {
    text: "Her music brought literal tears to my eyes. I felt the presence of God in my room as I listened to 'Light of the World'. A true vessel.",
    author: "Sister Sarah J.",
    location: "London, UK"
  },
  {
    text: "Mary Oluchi is gifted beyond words. Her ministration at our conference was the highlight of the entire year. Powerful!",
    author: "Pastor Emmanuel",
    location: "Lagos, Nigeria"
  },
  {
    text: "I was going through a deep depression when I found her YouTube channel. Her worship playlist became my daily bread.",
    author: "David Williams",
    location: "New York, USA"
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-bg text-white overflow-hidden relative border-b border-white/5">
      <div className="max-w-3xl mx-auto px-10 relative z-10 text-center">
        <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-20 font-medium">Testimonials</h2>
        
        <div className="relative h-[200px] flex items-center justify-center">
          {testimonials.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0 }}
               animate={active === index ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.8 }}
               className={`absolute inset-0 flex flex-col items-center justify-center transition-all ${active === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
             >
                <p className="font-serif text-xl md:text-2xl font-light leading-relaxed mb-10 text-white/80">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-gold/30" />
                  <div className="text-left">
                    <p className="text-gold uppercase tracking-widest text-[10px] font-bold">{item.author}</p>
                    <p className="text-white/20 text-[9px] uppercase tracking-widest mt-1">{item.location}</p>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${active === index ? 'bg-gold w-8' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

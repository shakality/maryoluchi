import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Twitter, Music as MusicIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Get in Touch</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-light mb-10 text-white leading-tight">Ministry Enquiries <br />& Bookings</h3>
            
            <p className="text-white/20 mb-16 leading-relaxed max-w-sm font-light">
              Connect with us for ministry invitations or to share how the music has touched your journey.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-10 h-10 border border-white/5 flex items-center justify-center group-hover:border-gold transition-all duration-500">
                  <Mail size={16} className="text-white/40 group-hover:text-gold" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-2">Electronic Mail</p>
                  <a href="mailto:info@maryoluchi.com" className="text-lg font-serif font-light text-white hover:text-gold transition-colors">info@maryoluchi.com</a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-10 h-10 border border-white/5 flex items-center justify-center group-hover:border-gold transition-all duration-500">
                  <Phone size={16} className="text-white/40 group-hover:text-gold" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-2">Booking Office</p>
                  <p className="text-lg font-serif font-light text-white">+234 812 345 6789</p>
                </div>
              </div>
            </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-glass border border-glass-border rounded-none flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/40 mb-1">Base Location</p>
                  <p className="text-lg font-serif font-bold text-ink">Lagos, Nigeria</p>
                </div>
              </div>

            <div className="mt-12 pt-12 border-t border-glass-border flex gap-6">
              <Instagram className="cursor-pointer text-ink/60 hover:text-gold transition-colors" />
              <Youtube className="cursor-pointer text-ink/60 hover:text-gold transition-colors" />
              <Facebook className="cursor-pointer text-ink/60 hover:text-gold transition-colors" />
              <MusicIcon className="cursor-pointer text-ink/60 hover:text-gold transition-colors" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-12 bg-white/5 border border-white/5 shadow-2xl relative"
          >
            {/* Netlify Form Integration */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="flex flex-col gap-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="space-y-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Enter full name"
                  className="w-full bg-transparent border-b border-white/10 py-4 font-serif text-white focus:outline-none focus:border-gold transition-all text-xl"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold">Email Interface</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Enter email address"
                  className="w-full bg-transparent border-b border-white/10 py-4 font-serif text-white focus:outline-none focus:border-gold transition-all text-xl"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-gold font-bold">Inquiry Depth</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your request..."
                  className="w-full bg-transparent border-b border-white/10 py-4 font-serif text-white focus:outline-none focus:border-gold transition-all resize-none text-xl"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-gold text-black font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-500 hover:bg-gold-light hover:scale-[1.02]"
              >
                Dispatch Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-bg border-t border-glass-border py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h4 className="font-serif text-3xl font-bold tracking-widest mb-6 text-gold">MARY OLUCHI</h4>
            <p className="max-w-xs text-ink/40 italic leading-relaxed text-sm">
              Anointed gospel artist dedicated to spreading the message of Christ through powerful worship and soul-stirring music.
            </p>
          </div>

          <div>
             <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6 underline underline-offset-8">Explore</h5>
             <ul className="space-y-4 text-xs uppercase tracking-widest font-medium">
               <li><a href="#about" className="text-ink/60 hover:text-gold transition-all duration-300">About Ministry</a></li>
               <li><a href="#music" className="text-ink/60 hover:text-gold transition-all duration-300">Latest Albums</a></li>
               <li><a href="#videos" className="text-ink/60 hover:text-gold transition-all duration-300">Visual Archive</a></li>
               <li><a href="#events" className="text-ink/60 hover:text-gold transition-all duration-300">Tour Dates</a></li>
             </ul>
          </div>

          <div>
             <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6 underline underline-offset-8">Legals</h5>
             <ul className="space-y-4 text-xs uppercase tracking-widest font-medium text-ink/60">
               <li><a href="#" className="hover:text-gold transition-all duration-300">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-gold transition-all duration-300">Terms of Service</a></li>
               <li><a href="#" className="hover:text-gold transition-all duration-300">Media Kit</a></li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-glass-border text-[9px] uppercase tracking-[0.2em] text-ink/20 font-bold">
           <p>© 2026 MARY OLUCHI MINISTRY. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8 mt-4 md:mt-0">
             <span>Design by Premium Creative</span>
             <a href="#home" className="hover:text-gold transition-colors">Back to Top</a>
           </div>
        </div>
      </div>
    </footer>
  );
}

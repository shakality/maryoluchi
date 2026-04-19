import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 bg-bg overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-rows-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="relative z-10 p-2 bg-gradient-to-b from-white/5 to-transparent">
              <img
                src="https://i.ibb.co/SDYpw7YD/Screenshot-68.png"
                alt="Mary Oluchi"
                className="w-full transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">The Journey</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Anointed to Lead, <br />
              <span className="text-gold-dark italic text-3xl md:text-4xl">Called to Worship</span>
            </h3>
            <div className="space-y-6 text-white/40 leading-relaxed font-light text-lg">
              <p>
                Mary Oluchi is a vessel of worship, a powerful voice in the global gospel industry dedicated to spreading the message of hope, redemption, and the unconditional love of God through music.
              </p>
              <p>
                From her early beginnings in the choir to performing on international stages, Mary has remained steadfast in her mission to bridge the gap between heaven and earth through her soul-stirring ministrations.
              </p>
              <p>
                Her discography, including the soul-stirring <span className="text-gold italic">"Mother of Jesus"</span>, is more than just melody; it's a spiritual experience designed to lift the brokenhearted and lead the faithful into the presence of the Almighty.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div>
                <p className="text-gold font-serif text-4xl font-light">10+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mt-3">Years of Ministry</p>
              </div>
              <div>
                <p className="text-gold font-serif text-4xl font-light">5M+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mt-3">Global Streams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

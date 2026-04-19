import { motion } from "motion/react";
import { Play, Download, ExternalLink } from "lucide-react";

const albums = [
  {
    title: "Mother of Jesus",
    year: "2022",
    image: "https://i.ibb.co/jZD87KpQ/0c5f2ca9-5b35-4ee8-8fc6-3aa501f013ff.png",
    tracks: 1,
    spotifyUrl: "https://open.spotify.com/track/6pTziCjKcPcv1WxUrxgFDD"
  },
  {
    title: "Nuriba",
    year: "2022",
    image: "https://i.ibb.co/dJr6n3ds/Screenshot-70.png",
    tracks: 1,
    spotifyUrl: "https://open.spotify.com/track/35JYKmDN3LU3KftTgFNw4o"
  },
  {
    title: "She Can",
    year: "2021",
    image: "https://i.ibb.co/Kpnp3xTk/Screenshot-71.png",
    tracks: 1,
    spotifyUrl: "https://open.spotify.com/track/5BGg1eTySaRP2SVfKOif4z"
  },
  {
    title: "Nne Oyoko",
    year: "2021",
    image: "https://i.ibb.co/Dg7ZXLw8/Screenshot-72.png",
    tracks: 1,
    spotifyUrl: "https://open.spotify.com/album/45z2BpVnTZB8OLN1u9QsV4"
  },
  {
    title: "Nneoma",
    year: "2021",
    image: "https://i.ibb.co/BKHSG8yB/Screenshot-73.png",
    tracks: 1,
    spotifyUrl: "https://open.spotify.com/track/04AcltaM8mew0yidNq6DXj"
  },
  {
    title: "Enwerem Nne",
    year: "2021",
    image: "https://i.ibb.co/jvKBsRbM/Screenshot-74.png",
    tracks: 1,
    spotifyUrl: "https://open.spotify.com/track/0jhREr64DoQvSoaKq5H4hX"
  }
];

export function Music() {
  return (
    <section id="music" className="py-32 bg-bg text-white border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="font-serif text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Discography</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-light text-white tracking-tight">Anointed Worship</h3>
          </div>
          <a 
            href="https://open.spotify.com/artist/33yR0A2y5O1S99XpA9rYFm" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/30 pb-2 hover:text-white hover:border-white transition-all"
          >
            <span>Follow on Spotify</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-y-16 gap-x-10">
          {albums.map((album, index) => (
            <motion.a
              key={index}
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-square overflow-hidden mb-8 bg-white/5">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                     <Play className="text-gold w-4 h-4 ml-1" />
                   </div>
                </div>
              </div>
              <h4 className="text-lg font-medium font-serif mb-1 group-hover:text-gold transition-colors">{album.title}</h4>
              <p className="text-white/20 text-[10px] uppercase tracking-widest">{album.year} • Single</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-32 p-1 border-t border-white/5 flex flex-col md:flex-row items-center gap-12 pt-16">
           <div className="w-32 h-32 bg-white/5 shrink-0 transition-all duration-1000">
             <img src="https://picsum.photos/seed/mother_of_jesus/400/400" alt="Current Track" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80" />
           </div>
           <div className="grow text-center md:text-left">
             <h5 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Now Trending</h5>
             <h4 className="text-4xl font-serif font-light mb-2">Mother of Jesus</h4>
             <p className="text-white/20 text-xs italic tracking-widest uppercase">The Anointed Sound of Worship</p>
           </div>
           <div className="flex items-center gap-10">
              <a 
                href="https://open.spotify.com/track/0jhREr64DoQvSoaKq5H4hX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-500"
              >
                <Play className="ml-1 w-5 h-5" />
              </a>
              <div className="flex flex-col gap-3">
                <a href="#music" className="text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">Listen All</a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

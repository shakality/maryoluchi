import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Music as MusicIcon } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Music", href: "#music" },
    { name: "Videos", href: "#videos" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled ? "bg-bg/80 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo - Left */}
        <div className="flex justify-start">
          <motion.a
            href="#home"
            className="font-serif text-xl font-medium tracking-[0.4em] text-gold"
          >
            MARY OLUCHI
          </motion.a>
        </div>

        {/* Desktop Nav - Center */}
        <div className="hidden md:flex justify-center items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[9px] uppercase tracking-[0.3em] font-medium transition-all duration-300 hover:text-gold ${
                isScrolled ? "text-white/60" : "text-white/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Socials & Mobile Trigger - Right */}
        <div className="flex justify-end items-center space-x-8">
          <div className="hidden md:flex items-center space-x-5">
            <Instagram className={`w-3.5 h-3.5 cursor-pointer hover:text-gold transition-colors ${isScrolled ? "text-white/40" : "text-white/60"}`} />
            <Youtube className={`w-3.5 h-3.5 cursor-pointer hover:text-gold transition-colors ${isScrolled ? "text-white/40" : "text-white/60"}`} />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? "text-white" : "text-white"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-bg border-b border-glass-border overflow-hidden"
      >
        <div className="flex flex-col space-y-4 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-ink/70 hover:text-gold font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen min-h-[800px] overflow-hidden flex items-end md:items-center justify-center bg-[#020202]">
      <div className="atmosphere absolute inset-0 z-0 opacity-40 pointer-events-none" />
      
      {/* Background Image - Subtle */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-10 filter grayscale">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#020202]/50 to-[#020202] z-10" />
        <img
          src="https://picsum.photos/seed/worship/1920/1080?blur=5"
          alt="Mary Oluchi Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-10 grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-20 pb-20 md:pb-0 pt-32 md:pt-0">
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl lg:text-[140px] text-white font-extralight tracking-tighter mb-8 lg:mb-12 leading-[0.85]"
          >
            MARY<br />OLUCHI
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6 lg:gap-8"
          >
            <a
              href="https://open.spotify.com/artist/0f6HPdXbA6urdGTosAqr1e"
              className="px-12 py-5 bg-gold text-black font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:bg-gold-light hover:scale-105"
            >
              Listen Now
            </a>
            <a
              href="#videos"
              className="px-12 py-5 border border-white/10 text-white/80 font-medium uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:bg-white/5 hover:border-white/20"
            >
              Watch Videos
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="relative hidden md:block max-w-[450px] ml-auto"
        >
          <div className="absolute -inset-4 border border-gold/10 pointer-events-none translate-x-4 translate-y-4" />
          <div className="relative overflow-hidden bg-white/5 aspect-[3/4]">
            <img
              src="https://i.ibb.co/6052cnCp/unnamed-3.jpg"
              alt="Mary Oluchi Portrait"
              className="w-full h-full object-cover transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <div className="w-[1px] h-20 bg-linear-to-b from-white to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

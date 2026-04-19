/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from './components/Hero';
import { About } from './components/About';
import { Music } from './components/Music';
import { Videos } from './components/Videos';
import { Events } from './components/Events';
import { Gallery, Testimonials } from './components/Gallery';
import { Contact, Footer } from './components/Contact';

export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Videos />
      <Events />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

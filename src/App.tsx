import { Bio } from './components/Bio/Bio';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Bio />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}
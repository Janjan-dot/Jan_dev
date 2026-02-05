import { BioHeader } from './BioHeader';
import { BioServices } from './BioServices';

export function Bio() {
  return (
    <section id="bio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <BioHeader />
        <BioServices />
      </div>
    </section>
  );
}
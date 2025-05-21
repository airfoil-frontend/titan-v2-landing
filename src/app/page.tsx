import { FeaturesSection } from '@/modules/Home/Features/FeaturesSection';
import { Hero } from '@/modules/Home/Hero/Hero';
import { Tagline } from '@/modules/Home/Tagline/Tagline';

const Homepage = async () => {
  return (
    <section className="grid">
      <Hero />
      <Tagline />
      <FeaturesSection />
      {/* <CTASection /> */}
    </section>
  );
};

export default Homepage;

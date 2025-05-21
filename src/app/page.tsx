import { FeaturesSection } from '@/modules/Home/Features/FeaturesSection';
import { Hero } from '@/modules/Home/Hero/Hero';

const Homepage = async () => {
  return (
    <section className="grid">
      <Hero />
      <FeaturesSection />
      {/* <CTASection /> */}
    </section>
  );
};

export default Homepage;

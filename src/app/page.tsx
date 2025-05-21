import { ComparisonSection } from '@/modules/Home/Comparison/ComparisonSection';
import { Hero } from '@/modules/Home/Hero/Hero';
import { Tagline } from '@/modules/Home/Tagline/Tagline';

const Homepage = async () => {
  return (
    <section className="grid">
      <Hero />
      <Tagline />
      <ComparisonSection />
      {/* <CTASection /> */}
    </section>
  );
};

export default Homepage;

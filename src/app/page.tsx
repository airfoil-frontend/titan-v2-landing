import { ComparisonSection } from '@/modules/Home/Comparison/ComparisonSection';
import { CTASection } from '@/modules/Home/CTA/CTASection';
import { FeaturesSection } from '@/modules/Home/Features/FeaturesSection';
import { Hero } from '@/modules/Home/Hero/Hero';
import { PriceSection } from '@/modules/Home/Price/PriceSection';
import { Tagline } from '@/modules/Home/Tagline/Tagline';

const Homepage = async () => {
  return (
    <section className="grid" id="main">
      <Hero />
      <Tagline />
      <FeaturesSection />
      <PriceSection />
      <ComparisonSection />
      <CTASection />
    </section>
  );
};

export default Homepage;

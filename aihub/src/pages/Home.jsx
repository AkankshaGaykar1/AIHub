/**
 * Home Page
 * Landing page with Hero, Stats, Categories, Trending, Features, Testimonials, CTA sections.
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiSparkles, HiArrowRight, HiRocketLaunch, HiBolt,
  HiCpuChip, HiGlobeAlt, HiCommandLine, HiEye,
} from 'react-icons/hi2';

import VideoBackground from '../components/VideoBackground';
import AnimatedBackground from '../components/AnimatedBackground';
import StatCounter from '../components/StatCounter';
import CategoryCard from '../components/CategoryCard';
import ToolCard from '../components/ToolCard';
import FeatureCard from '../components/FeatureCard';
import ReviewCard from '../components/ReviewCard';

import { categories, statistics, tools, features, testimonials } from '../data/mockData';

// ===== HERO SECTION =====
const HeroSection = () => {
  const floatingIcons = [
    { icon: HiCpuChip, x: '10%', y: '20%', delay: 0 },
    { icon: HiBolt, x: '85%', y: '15%', delay: 0.5 },
    { icon: HiCommandLine, x: '75%', y: '70%', delay: 1 },
    { icon: HiGlobeAlt, x: '15%', y: '75%', delay: 1.5 },
    { icon: HiEye, x: '50%', y: '10%', delay: 0.8 },
    { icon: HiSparkles, x: '90%', y: '50%', delay: 1.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      {/* Removed Floating AI Icons */}

      <div className="relative section-container text-center py-32 md:py-40">
        {/* Badge Removed */}

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto text-slate-900"
        >
          Supercharge your workflow with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent-cyan">Next-Gen AI Tools</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="text-theme-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Explore, compare, and use the latest AI tools to boost productivity, creativity, and business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/explore" className="btn-primary text-base px-8 py-4 flex items-center gap-2 group">
            <HiRocketLaunch size={20} />
            Explore Tools
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <a href="#trending" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
            <HiSparkles size={20} />
            Trending Tools
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-theme-muted/80 text-sm"
        >
          Trusted by 500,000+ users worldwide
        </motion.div>

        {/* Framed Hero Video */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-16 max-w-5xl mx-auto relative rounded-[20px] p-2 glass-card shadow-[0_0_50px_rgba(108,99,255,0.15)] glow-purple"
         >
           <div className="rounded-2xl overflow-hidden relative aspect-video bg-theme-bg">
             <motion.img 
               src="/hero_image.jpg" 
               alt="AI Tools Dashboard" 
               className="w-full h-full object-cover"
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/80 via-transparent to-transparent pointer-events-none"></div>
             
             {/* Play Button Overlay (Optional UI touch) */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <motion.div 
                 className="w-20 h-20 rounded-full bg-slate-200 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl"
                 animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
               </motion.div>
             </div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

// ===== STATISTICS SECTION =====
const StatsSection = () => {
  return (
    <section className="relative section-padding border-y border-theme-glassBorder">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {statistics.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== CATEGORIES SECTION =====
const CategoriesSection = () => {
  return (
    <section id="categories" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <p className="section-subtitle">
            Explore AI tools organized by their primary function and use case
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== NEW LAUNCHES SECTION =====
const NewLaunchesSection = () => {
  const newTools = tools.filter((t) => t.isNew);

  if (!newTools || newTools.length === 0) return null;

  return (
    <section id="new-launches" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Just Launched
            </div>
          </div>
          <h2 className="section-title">
            New <span className="gradient-text">Launches</span>
          </h2>
          <p className="section-subtitle">
            Discover the latest and greatest AI tools added to our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== TRENDING TOOLS SECTION =====
const TrendingSection = () => {
  const trendingTools = tools.filter((t) => t.trending);

  return (
    <section id="trending" className="section-padding relative bg-theme-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Trending <span className="gradient-text">AI Tools</span>
          </h2>
          <p className="section-subtitle">
            The most popular AI tools loved by thousands of users worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/explore" className="btn-secondary inline-flex items-center gap-2 group">
            View All Tools
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// ===== FEATURES SECTION =====
const FeaturesSection = () => {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Why Choose <span className="gradient-text">AIHub</span>?
          </h2>
          <p className="section-subtitle">
            Everything you need to discover and compare the best AI tools in one place
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 mt-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-cyan/20 text-primary shadow-lg">
                   <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-theme-text">{feature.title}</h3>
                <p className="text-xl text-theme-muted leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-theme-text/80">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                    Premium Quality
                  </li>
                  <li className="flex items-center gap-3 text-theme-text/80">
                    <div className="w-6 h-6 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan text-sm">✓</div>
                    Seamless Integration
                  </li>
                </ul>
              </div>
              
              {/* Image/Media */}
              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent-cyan rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden border border-theme-glassBorder glass-card">
                  {feature.image ? (
                    <img src={feature.image} alt={feature.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-[400px] bg-theme-bg flex items-center justify-center text-theme-muted/80">No Image Provided</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== TESTIMONIALS SECTION =====
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding relative bg-theme-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="section-subtitle">
            Join thousands of satisfied users who found their perfect AI tools through AIHub
          </p>
        </motion.div>

        {/* Desktop: Grid view */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <ReviewCard testimonial={testimonials[activeIndex]} />
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-slate-200 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== CTA SECTION =====
const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="orb orb-purple w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="relative section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Discovering Better{' '}
            <span className="gradient-text">AI Tools</span> Today
          </h2>
          <p className="text-theme-muted text-lg max-w-xl mx-auto mb-10">
            Join our growing community and never miss the next breakthrough AI tool.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/explore" className="btn-primary text-base px-8 py-4 flex items-center gap-2 group">
              <HiRocketLaunch size={20} />
              Explore Tools
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <a href="#" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ===== PRICING SECTION =====
const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: ['Browse all tools', 'Basic search & filters', 'Read reviews', 'Save 5 favorites', 'Community access'],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'For power users',
      features: ['Everything in Free', 'Advanced comparison', 'AI recommendations', 'Unlimited favorites', 'Priority support', 'Early access', 'Export comparisons'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$29.99',
      period: '/month',
      description: 'For teams & orgs',
      features: ['Everything in Pro', 'Team collaboration', 'Custom collections', 'API access', 'Dedicated manager', 'SSO & security', 'Usage analytics'],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding relative bg-slate-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-slate-900">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle text-slate-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-2 border-primary shadow-[0_0_40px_rgba(108,99,255,0.15)] scale-105 z-10' 
                  : 'border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-accent-cyan rounded-full text-xs font-bold text-white shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-slate-900 font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>

              <div className="mb-8 pb-8 border-b border-slate-100">
                <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                    <span className="text-primary bg-primary/10 rounded-full p-0.5 mt-0.5 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gradient-to-r from-primary to-accent-cyan text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== HOME PAGE =====
const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <NewLaunchesSection />
      <TrendingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
};

export default Home;

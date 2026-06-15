/**
 * FeatureCard Component
 * Animated feature card with icon, title, and description.
 */
import { motion } from 'framer-motion';
import {
  HiMagnifyingGlass, HiArrowsRightLeft, HiStar, HiSparkles,
} from 'react-icons/hi2';

const iconMap = {
  HiMagnifyingGlass,
  HiArrowsRightLeft,
  HiStar,
  HiSparkles,
};

const FeatureCard = ({ feature, index }) => {
  const IconComponent = iconMap[feature.icon] || HiSparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      className="group relative"
    >
      {/* Gradient border effect on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-accent-cyan to-accent-green opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

      <div className="relative glass-card p-8 h-full group-hover:bg-slate-100 transition-all duration-500">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-cyan/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent-cyan/30 transition-all duration-300">
          <IconComponent size={28} className="text-primary-light group-hover:text-slate-900 transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-slate-900 font-semibold text-xl mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;

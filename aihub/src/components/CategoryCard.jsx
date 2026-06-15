/**
 * CategoryCard Component
 * Glassmorphism card with icon, gradient glow on hover.
 */
import { motion } from 'framer-motion';
import {
  HiChatBubbleLeftRight, HiVideoCamera, HiPhoto, HiCodeBracket,
  HiMicrophone, HiRocketLaunch, HiMegaphone, HiAcademicCap,
} from 'react-icons/hi2';

// Map icon names to components
const iconMap = {
  HiChatBubbleLeftRight,
  HiVideoCamera,
  HiPhoto,
  HiCodeBracket,
  HiMicrophone,
  HiRocketLaunch,
  HiMegaphone,
  HiAcademicCap,
};

const CategoryCard = ({ category, index, onClick }) => {
  const IconComponent = iconMap[category.icon] || HiRocketLaunch;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.08 }}
      whileHover={{ y: -12, scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Glow effect behind card */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

      <div className="relative glass-card p-6 md:p-8 text-center group-hover:bg-theme-glassHover group-hover:border-theme-glassBorderHover transition-all duration-500 h-full">
        {/* Animated Image (Simulating Video) */}
        <div className={`relative w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-slate-900 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 z-10 overflow-hidden border-2 border-theme-glassBorder`}>
          <div className="w-full h-full rounded-xl overflow-hidden relative bg-theme-bg">
            {category.image ? (
              <>
                <motion.img 
                  src={category.image} 
                  alt={category.name}
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-theme-bg/20 mix-blend-overlay"></div>
              </>
            ) : (
              <IconComponent size={32} />
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="relative text-theme-text font-semibold text-lg mb-1 z-10 group-hover:text-primary-light transition-colors">
          {category.name}
        </h3>

        {/* Count */}
        <p className="relative text-theme-muted text-sm z-10">
          {category.count}+ tools
        </p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;

/**
 * ToolCard Component
 * Glassmorphism card for displaying AI tools with hover animations.
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiStar, HiArrowTopRightOnSquare } from 'react-icons/hi2';

const pricingColors = {
  Free: 'text-accent-green bg-accent-green/10 border-accent-green/20',
  Freemium: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20',
  Paid: 'text-primary-light bg-primary/10 border-primary/20',
};

const ToolCard = ({ tool, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.06 }}
      whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      className="group"
    >
      <Link to={`/tools/${tool.slug}`} className="block">
        <div className="relative glass-card p-6 h-full group-hover:bg-theme-glassHover group-hover:border-theme-glassBorderHover transition-all duration-500">
          {/* Hover glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: '0 0 40px rgba(124, 58, 237, 0.1), inset 0 0 40px rgba(124, 58, 237, 0.05)' }}
          />

          <div className="relative">
            {/* Image Thumbnail */}
            {tool.image ? (
              <div className="w-full h-40 mb-4 rounded-xl overflow-hidden relative group-hover:shadow-lg transition-all duration-300 border border-theme-glassBorder">
                <img src={tool.image} alt={tool.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border bg-theme-bg/80 backdrop-blur-md ${pricingColors[tool.pricing] || pricingColors.Freemium}`}>
                    {tool.pricing}
                  </span>
                </div>
                <div className="absolute top-3 left-3 w-10 h-10 bg-theme-bg/80 backdrop-blur-md rounded-lg flex items-center justify-center text-2xl border border-theme-glassBorder shadow-lg">
                  {tool.logo}
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{tool.logo}</div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${pricingColors[tool.pricing] || pricingColors.Freemium}`}>
                  {tool.pricing}
                </span>
              </div>
            )}

            {/* Name & Category */}
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-theme-text font-semibold text-lg group-hover:text-primary-light transition-colors duration-300">
                {tool.name}
              </h3>
              {tool.isNew && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-primary to-accent-cyan text-white shadow-sm uppercase tracking-wider shrink-0">
                  New
                </span>
              )}
            </div>
            <p className="text-theme-muted/80 text-xs font-medium uppercase tracking-wider mb-3">
              {tool.category}
            </p>

            {/* Description */}
            <p className="text-theme-muted text-sm leading-relaxed mb-4 line-clamp-2">
              {tool.shortDescription}
            </p>

            {/* Footer: Rating + Arrow */}
            <div className="flex items-center justify-between pt-4 border-t border-theme-glassBorder">
              <div className="flex items-center gap-1.5">
                <HiStar className="text-amber-400" size={16} />
                <span className="text-theme-text text-sm font-medium">{tool.rating}</span>
                <span className="text-theme-muted/80 text-xs">({tool.reviews.toLocaleString()})</span>
              </div>
              <HiArrowTopRightOnSquare className="text-theme-muted/80 group-hover:text-primary-light transition-colors duration-300" size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;

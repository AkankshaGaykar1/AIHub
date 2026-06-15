/**
 * ReviewCard Component
 * Testimonial card with avatar, name, role, rating, and quote.
 */
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative glass-card p-8 h-full flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border border-slate-100"
    >
      {/* Decorative Quote Mark */}
      <FaQuoteLeft className="absolute top-6 right-6 text-slate-100 text-6xl rotate-6 opacity-50 pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />

      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <HiStar key={i} className="text-amber-400" size={20} />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-base leading-relaxed mb-8 font-medium">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author */}
      <div className="relative z-10 flex items-center gap-4 pt-5 border-t border-slate-100">
        <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full text-3xl shadow-sm border border-slate-100">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="text-slate-900 font-bold text-base tracking-tight">{testimonial.name}</h4>
          <p className="text-slate-500 text-sm font-medium">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;

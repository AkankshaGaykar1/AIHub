/**
 * SearchBar Component
 * Large animated search input with icon and focus glow effect.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';

const SearchBar = ({ value, onChange, placeholder = 'Search AI tools...', large = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      {/* Glow effect when focused */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent-cyan to-primary opacity-0 blur-lg"
        animate={{ opacity: isFocused ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className={`relative flex items-center gap-3 glass-card ${large ? 'px-6 py-5' : 'px-4 py-3'} transition-all duration-300 ${isFocused ? 'border-primary/50 bg-slate-100' : ''}`}>
        <HiMagnifyingGlass className={`${large ? 'text-xl' : 'text-lg'} text-slate-500 flex-shrink-0`} />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`flex-1 bg-transparent outline-none text-slate-900 placeholder-gray-500 ${large ? 'text-lg' : 'text-sm'}`}
        />

        {value && (
          <button
            onClick={() => onChange('')}
            className="text-slate-500 hover:text-slate-900 transition-colors p-1"
          >
            <HiXMark size={18} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;

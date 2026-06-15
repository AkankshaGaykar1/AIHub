/**
 * Explore Tools Page
 * Search, filter, and browse all AI tools with category/pricing/sort filters.
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HiFunnel, HiXMark } from 'react-icons/hi2';

import AnimatedBackground from '../components/AnimatedBackground';
import SearchBar from '../components/SearchBar';
import ToolCard from '../components/ToolCard';
import { tools, categories } from '../data/mockData';

const pricingFilters = ['All', 'Free', 'Freemium', 'Paid'];
const sortOptions = [
  { label: 'Popular', value: 'popular' },
  { label: 'Trending', value: 'trending' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
  { label: 'Name A-Z', value: 'name' },
];

const ExploreTools = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let result = [...tools];

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((t) => t.category === selectedCategory);
    }

    // Pricing filter
    if (selectedPricing !== 'All') {
      result = result.filter((t) => t.pricing === selectedPricing);
    }

    // Sort
    switch (sortBy) {
      case 'trending':
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // popular — by reviews count
        result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [search, selectedCategory, selectedPricing, sortBy]);

  const hasActiveFilters = selectedCategory !== 'All' || selectedPricing !== 'All' || search;

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedPricing('All');
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero / Header */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <AnimatedBackground />
        <div className="relative section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Explore <span className="gradient-text">AI Tools</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-xl mx-auto mb-8"
          >
            Discover the perfect AI tool from our curated collection of {tools.length}+ tools
          </motion.p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search by name, category, or description..."
              large
            />
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="section-container pb-20">
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          {/* Left: Filter toggles */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-secondary !py-2 !px-4 flex items-center gap-2 text-sm"
            >
              <HiFunnel size={16} />
              Filters
            </button>

            {/* Category pills (desktop) */}
            <div className="hidden lg:flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.name
                      ? 'bg-primary text-white'
                      : 'bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Sort + Pricing */}
          <div className="flex items-center gap-3">
            {/* Pricing filter */}
            <div className="hidden lg:flex items-center gap-2">
              {pricingFilters.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPricing(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    selectedPricing === p
                      ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 outline-none focus:border-primary/50 cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card p-6 mb-6"
          >
            <h4 className="text-slate-900 font-medium mb-3">Category</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-slate-50 text-slate-500 border border-slate-200'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat.name
                      ? 'bg-primary text-white'
                      : 'bg-slate-50 text-slate-500 border border-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <h4 className="text-slate-900 font-medium mb-3">Pricing</h4>
            <div className="flex flex-wrap gap-2">
              {pricingFilters.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPricing(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedPricing === p
                      ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                      : 'text-slate-500 bg-slate-50 border border-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Active filters summary */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-slate-600 text-sm">Active filters:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary-light text-xs">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All')}><HiXMark size={14} /></button>
              </span>
            )}
            {selectedPricing !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs">
                {selectedPricing}
                <button onClick={() => setSelectedPricing('All')}><HiXMark size={14} /></button>
              </span>
            )}
            <button onClick={clearFilters} className="text-slate-500 text-xs hover:text-slate-900 ml-2">
              Clear all
            </button>
          </div>
        )}

        {/* Results count */}
        <p className="text-slate-600 text-sm mb-6">
          Showing <span className="text-slate-900 font-medium">{filteredTools.length}</span> tools
        </p>

        {/* Tool Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg mb-2">No tools found</p>
            <p className="text-slate-600 text-sm">Try adjusting your filters or search query</p>
            <button onClick={clearFilters} className="btn-secondary mt-6 text-sm">
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExploreTools;

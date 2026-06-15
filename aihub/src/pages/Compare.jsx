/**
 * Compare Page
 * Allows selecting multiple AI tools to compare side-by-side.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiXMark, HiArrowsRightLeft } from 'react-icons/hi2';

import AnimatedBackground from '../components/AnimatedBackground';
import ComparisonTable from '../components/ComparisonTable';
import { tools } from '../data/mockData';

const Compare = () => {
  const [selectedToolIds, setSelectedToolIds] = useState([1, 2]); // Pre-select ChatGPT and Claude
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedTools = tools.filter((t) => selectedToolIds.includes(t.id));
  const availableTools = tools.filter((t) => !selectedToolIds.includes(t.id));

  const filteredAvailableTools = availableTools.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTool = (id) => {
    if (selectedToolIds.length >= 4) {
      alert('You can compare up to 4 tools at a time.');
      return;
    }
    setSelectedToolIds([...selectedToolIds, id]);
    setIsSelectorOpen(false);
    setSearchQuery('');
  };

  const handleRemoveTool = (id) => {
    if (selectedToolIds.length <= 1) {
      alert('Please select at least 1 tool to compare.');
      return;
    }
    setSelectedToolIds(selectedToolIds.filter((toolId) => toolId !== id));
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <section className="relative py-12 md:py-16 overflow-hidden">
        <AnimatedBackground />
        <div className="relative section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-6">
              <HiArrowsRightLeft size={16} />
              <span>Compare AI Tools</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Side-by-Side <span className="gradient-text">Comparison</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">
              Compare features, ratings, pricing plans, and support options to choose the right AI partner.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container pb-24">
        {/* Selected Tools Grid / Control Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {selectedTools.map((tool) => (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative glass-card p-6 flex flex-col items-center justify-between text-center border-primary/30 bg-primary/5"
            >
              <button
                onClick={() => handleRemoveTool(tool.id)}
                className="absolute top-3 right-3 text-slate-600 hover:text-slate-900 transition-colors p-1 bg-slate-50 rounded-lg border border-slate-200"
              >
                <HiXMark size={16} />
              </button>

              <div className="flex flex-col items-center">
                <span className="text-5xl mb-4">{tool.logo}</span>
                <h3 className="text-slate-900 font-semibold text-lg mb-1">{tool.name}</h3>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20">
                  {tool.category}
                </span>
              </div>

              <div className="mt-6 w-full flex items-center justify-between text-xs text-slate-500 border-t border-slate-200 pt-4">
                <span>Rating: {tool.rating} ★</span>
                <span>{tool.pricing}</span>
              </div>
            </motion.div>
          ))}

          {/* Add Tool Card Slot */}
          {selectedToolIds.length < 4 && (
            <div className="relative">
              <button
                onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                className="w-full h-full min-h-[200px] rounded-2xl border-2 border-dashed border-slate-200 hover:border-primary/50 bg-white/[0.01] hover:bg-white/[0.03] transition-all flex flex-col items-center justify-center gap-3 group text-slate-500 hover:text-slate-900"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiPlus size={24} />
                </div>
                <span className="text-sm font-semibold">Add Tool to Compare</span>
              </button>

              {/* Selector Dropdown Modal */}
              <AnimatePresence>
                {isSelectorOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setIsSelectorOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 right-0 top-full mt-2 z-40 glass-card bg-white backdrop-blur-2xl border border-slate-200 p-4 max-h-[300px] overflow-y-auto"
                    >
                      <input
                        type="text"
                        placeholder="Search tool to add..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder-gray-500 outline-none focus:border-primary/50 mb-3"
                      />
                      <div className="space-y-1">
                        {filteredAvailableTools.length > 0 ? (
                          filteredAvailableTools.map((tool) => (
                            <button
                              key={tool.id}
                              onClick={() => handleAddTool(tool.id)}
                              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 flex items-center gap-3 transition-colors"
                            >
                              <span className="text-2xl">{tool.logo}</span>
                              <div className="flex-1">
                                <div className="font-semibold">{tool.name}</div>
                                <div className="text-xs text-slate-600">{tool.category}</div>
                              </div>
                              <span className="text-xs text-accent-cyan border border-accent-cyan/20 px-2 py-0.5 rounded">
                                {tool.pricing}
                              </span>
                            </button>
                          ))
                        ) : (
                          <div className="text-center text-slate-600 py-4 text-xs">
                            No matching tools found.
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Detailed Comparison Table Wrapper */}
        <div className="glass-card p-6 md:p-8 bg-white">
          <ComparisonTable tools={selectedTools} />
        </div>
      </section>
    </div>
  );
};

export default Compare;

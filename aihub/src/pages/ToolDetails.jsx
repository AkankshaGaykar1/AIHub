/**
 * Tool Details Page
 * Dynamic route showing full details for a single AI tool.
 */
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  HiStar, HiArrowTopRightOnSquare, HiArrowLeft,
  HiCheck, HiXMark, HiChatBubbleLeftRight,
} from 'react-icons/hi2';

import AnimatedBackground from '../components/AnimatedBackground';
import { tools } from '../data/mockData';

const tabs = ['Features', 'Pros & Cons', 'Reviews'];

const ToolDetails = () => {
  const { slug } = useParams();
  const tool = tools.find((t) => t.slug === slug);
  const [activeTab, setActiveTab] = useState('Features');

  if (!tool) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl text-slate-900 mb-4">Tool not found</h1>
        <Link to="/explore" className="btn-primary">
          Browse All Tools
        </Link>
      </div>
    );
  }

  // Generate mock reviews from the tool data
  const mockReviews = [
    { id: 1, user: 'Alex M.', avatar: '👨‍💻', rating: 5, date: '2 days ago', content: `${tool.name} has completely transformed my workflow. The ${tool.features[0]?.toLowerCase()} feature is incredible and saves me hours every day.` },
    { id: 2, user: 'Priya S.', avatar: '👩‍🔬', rating: 4, date: '1 week ago', content: `Really solid tool overall. ${tool.pros[0]} is the biggest advantage. Only minor issues with the learning curve.` },
    { id: 3, user: 'James K.', avatar: '👨‍🎨', rating: 5, date: '2 weeks ago', content: `I've tried many alternatives but ${tool.name} stands out. ${tool.shortDescription} It delivers exactly on that promise.` },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <AnimatedBackground />
        <div className="relative section-container">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/explore" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm mb-8 transition-colors">
              <HiArrowLeft size={16} />
              Back to Explore
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Logo & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{tool.logo}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{tool.name}</h1>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 text-sm">{tool.category}</span>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      <HiStar className="text-amber-400" size={16} />
                      <span className="text-slate-900 text-sm font-medium">{tool.rating}</span>
                      <span className="text-slate-600 text-sm">({tool.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-6 max-w-2xl">
                {tool.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  Visit Website
                  <HiArrowTopRightOnSquare size={16} />
                </a>
                <Link to="/compare" className="btn-secondary flex items-center gap-2">
                  Compare Tool
                </Link>
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 w-full md:w-80 flex-shrink-0"
            >
              <h3 className="text-slate-900 font-semibold mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Pricing</span>
                  <span className="text-accent-cyan text-sm font-medium">{tool.pricing}</span>
                </div>
                <div className="border-t border-slate-200" />
                <div>
                  <span className="text-slate-500 text-sm block mb-1">Price Details</span>
                  <span className="text-slate-700 text-sm">{tool.pricingDetails}</span>
                </div>
                <div className="border-t border-slate-200" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">API Support</span>
                  {tool.apiSupport ? (
                    <span className="text-accent-green text-sm flex items-center gap-1"><HiCheck size={14} /> Yes</span>
                  ) : (
                    <span className="text-red-400 text-sm flex items-center gap-1"><HiXMark size={14} /> No</span>
                  )}
                </div>
                <div className="border-t border-slate-200" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Mobile</span>
                  {tool.mobileSupport ? (
                    <span className="text-accent-green text-sm flex items-center gap-1"><HiCheck size={14} /> Yes</span>
                  ) : (
                    <span className="text-red-400 text-sm flex items-center gap-1"><HiXMark size={14} /> No</span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-container pb-20">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
                activeTab === tab
                  ? 'text-slate-900'
                  : 'text-slate-500 hover:text-gray-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-cyan"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Features Tab */}
          {activeTab === 'Features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 glass-card p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <HiCheck className="text-primary-light" size={16} />
                  </div>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pros & Cons Tab */}
          {activeTab === 'Pros & Cons' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pros */}
              <div>
                <h3 className="text-accent-green font-semibold text-lg mb-4 flex items-center gap-2">
                  <HiCheck size={20} />
                  Pros
                </h3>
                <div className="space-y-3">
                  {tool.pros.map((pro, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-accent-green/5 border border-accent-green/10"
                    >
                      <HiCheck className="text-accent-green mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-slate-700 text-sm">{pro}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h3 className="text-red-400 font-semibold text-lg mb-4 flex items-center gap-2">
                  <HiXMark size={20} />
                  Cons
                </h3>
                <div className="space-y-3">
                  {tool.cons.map((con, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/10"
                    >
                      <HiXMark className="text-red-400 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-slate-700 text-sm">{con}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'Reviews' && (
            <div className="space-y-4">
              {mockReviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{review.avatar}</span>
                      <div>
                        <h4 className="text-slate-900 font-medium text-sm">{review.user}</h4>
                        <p className="text-slate-600 text-xs">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }, (_, j) => (
                        <HiStar key={j} className="text-amber-400" size={14} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{review.content}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default ToolDetails;

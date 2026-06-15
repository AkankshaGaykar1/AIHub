/**
 * Dashboard Page
 * Dashboard UI showing Recently Viewed, Favorites, Recommendations, and mock Analytics.
 */
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiHeart, HiEye, HiSparkles, HiStar,
  HiChevronRight, HiTrash, HiUser, HiLockClosed, HiBell
} from 'react-icons/hi2';

import DashboardSidebar from '../components/DashboardSidebar';
import { tools, dashboardData } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [favorites, setFavorites] = useState(dashboardData.favorites);
  const [reviews, setReviews] = useState([
    { id: 1, toolId: 1, rating: 5, content: 'ChatGPT is absolutely critical for my coding and technical writing tasks.', date: '2026-06-05' },
    { id: 2, toolId: 6, rating: 4.8, content: 'Cursor has changed how I interact with files in my IDE. AI pair programming is awesome.', date: '2026-05-28' },
  ]);

  // Determine current view based on location path
  const currentPath = location.pathname;
  let currentTab = 'overview';
  if (currentPath.includes('/favorites')) currentTab = 'favorites';
  if (currentPath.includes('/reviews')) currentTab = 'reviews';
  if (currentPath.includes('/settings')) currentTab = 'settings';

  // Load tools corresponding to IDs
  const favoriteTools = tools.filter((t) => favorites.includes(t.id));
  const recentlyViewedTools = tools.filter((t) => dashboardData.recentlyViewed.includes(t.id));
  const recommendedTools = tools.filter((t) => dashboardData.recommendations.includes(t.id));

  const handleRemoveFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  const handleAddFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-slate-50 pt-16 lg:pt-0">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              {currentTab === 'overview' && `Welcome Back, ${user?.name || 'Explorer'}`}
              {currentTab === 'favorites' && 'Favorite Tools'}
              {currentTab === 'reviews' && 'My Reviews'}
              {currentTab === 'settings' && 'Account Settings'}
            </h1>
            <p className="text-slate-500 text-sm">
              {currentTab === 'overview' && 'Manage your discoveries, view recommendations, and keep track of tool comparisons.'}
              {currentTab === 'favorites' && 'Your curated list of saved AI systems.'}
              {currentTab === 'reviews' && 'Manage reviews and comments you have posted across AIHub.'}
              {currentTab === 'settings' && 'Update profile parameters, notification triggers, and active connections.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 text-xs font-semibold text-accent-cyan">
            <HiSparkles size={16} />
            <span>AI Partner Level: Advanced Pro</span>
          </div>
        </div>

        {/* --- OVERVIEW TAB --- */}
        {currentTab === 'overview' && (
          <div className="space-y-10">
            {/* Analytics Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Tools Viewed', value: dashboardData.stats.toolsViewed, icon: HiEye, color: 'text-accent-cyan' },
                { label: 'Comparisons Made', value: dashboardData.stats.comparisons, icon: HiSparkles, color: 'text-primary-light' },
                { label: 'Reviews Posted', value: reviews.length, icon: HiStar, color: 'text-amber-400' },
                { label: 'Total Favorites', value: favorites.length, icon: HiHeart, color: 'text-red-400' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-6 flex items-center justify-between">
                  <div>
                    <span className="text-slate-600 text-xs font-medium uppercase tracking-wider block mb-1">
                      {stat.label}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={22} />
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid: Favorites & Recently Viewed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Favorites */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                    <HiHeart className="text-red-400" /> Favorite Tools
                  </h3>
                  <Link to="/dashboard/favorites" className="text-primary-light hover:text-slate-900 text-sm flex items-center gap-1">
                    See All <HiChevronRight size={14} />
                  </Link>
                </div>

                <div className="space-y-4">
                  {favoriteTools.slice(0, 3).map((tool) => (
                    <div key={tool.id} className="glass-card p-4 flex items-center justify-between hover:bg-slate-100 transition-colors">
                      <Link to={`/tools/${tool.slug}`} className="flex items-center gap-4 flex-1">
                        <span className="text-3xl">{tool.logo}</span>
                        <div>
                          <h4 className="text-slate-900 font-semibold text-sm group-hover:text-primary-light">{tool.name}</h4>
                          <span className="text-slate-600 text-xs">{tool.category}</span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded border border-accent-cyan/20 text-accent-cyan bg-accent-cyan/10">
                          {tool.pricing}
                        </span>
                        <button
                          onClick={(e) => handleRemoveFavorite(tool.id, e)}
                          className="text-slate-600 hover:text-red-400 transition-colors p-1"
                          title="Remove Favorite"
                        >
                          <HiTrash size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {favoriteTools.length === 0 && (
                    <div className="text-center py-8 text-slate-600 text-sm border border-dashed border-slate-200 rounded-2xl">
                      No favorite tools saved yet.
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Recently Viewed */}
              <div className="space-y-6">
                <h3 className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                  <HiEye className="text-accent-cyan" /> Recently Viewed
                </h3>
                <div className="glass-card p-4 divide-y divide-white/5 space-y-3">
                  {recentlyViewedTools.slice(0, 4).map((tool, index) => (
                    <Link
                      key={tool.id}
                      to={`/tools/${tool.slug}`}
                      className={`flex items-center gap-3 pt-3 first:pt-0 hover:bg-slate-50 rounded-lg p-1.5 transition-colors`}
                    >
                      <span className="text-2xl">{tool.logo}</span>
                      <div className="flex-1">
                        <h4 className="text-slate-900 font-semibold text-xs">{tool.name}</h4>
                        <span className="text-slate-600 text-[10px] uppercase tracking-wider">{tool.category}</span>
                      </div>
                      <HiChevronRight className="text-slate-600" size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations Grid */}
            <div className="space-y-6">
              <h3 className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                <HiSparkles className="text-primary-light" /> AI Recommended Systems
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedTools.slice(0, 4).map((tool) => (
                  <div key={tool.id} className="glass-card p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{tool.logo}</span>
                        <button
                          onClick={() => handleAddFavorite(tool.id)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            favorites.includes(tool.id)
                              ? 'bg-red-500/10 border-red-500/20 text-red-400'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <HiHeart size={16} />
                        </button>
                      </div>
                      <h4 className="text-slate-900 font-semibold text-sm mb-1">{tool.name}</h4>
                      <p className="text-slate-500 text-xs line-clamp-2 mb-4">{tool.shortDescription}</p>
                    </div>
                    <Link
                      to={`/tools/${tool.slug}`}
                      className="text-primary-light hover:text-slate-900 text-xs font-semibold flex items-center justify-end gap-1 mt-2"
                    >
                      View Details <HiChevronRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- FAVORITES TAB --- */}
        {currentTab === 'favorites' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteTools.map((tool) => (
              <div key={tool.id} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{tool.logo}</span>
                    <button
                      onClick={(e) => handleRemoveFavorite(tool.id, e)}
                      className="p-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                      title="Remove Favorite"
                    >
                      <HiTrash size={16} />
                    </button>
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-1">{tool.name}</h3>
                  <span className="text-slate-600 text-xs font-medium uppercase tracking-wider block mb-3">
                    {tool.category}
                  </span>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{tool.shortDescription}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded border border-accent-cyan/20 text-accent-cyan bg-accent-cyan/10">
                    {tool.pricing}
                  </span>
                  <Link to={`/tools/${tool.slug}`} className="btn-secondary !py-1.5 !px-3 text-xs">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
            {favoriteTools.length === 0 && (
              <div className="col-span-full text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
                <HiHeart className="text-gray-600 mx-auto mb-4" size={48} />
                <p className="text-slate-500 text-lg mb-2">No favorite tools saved</p>
                <p className="text-slate-600 text-sm mb-6">Explore the platform to add tools to your dashboard.</p>
                <Link to="/explore" className="btn-primary text-sm">Explore Tools</Link>
              </div>
            )}
          </div>
        )}

        {/* --- REVIEWS TAB --- */}
        {currentTab === 'reviews' && (
          <div className="space-y-4">
            {reviews.map((rev) => {
              const toolObj = tools.find((t) => t.id === rev.toolId);
              return (
                <div key={rev.id} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{toolObj?.logo}</span>
                      <div>
                        <h4 className="text-slate-900 font-semibold">{toolObj?.name}</h4>
                        <span className="text-slate-600 text-xs">{rev.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }, (_, j) => (
                          <HiStar key={j} className={j < Math.floor(rev.rating) ? "text-amber-400" : "text-gray-600"} size={16} />
                        ))}
                      </div>
                      <button
                        onClick={() => handleDeleteReview(rev.id)}
                        className="text-slate-600 hover:text-red-400 p-1"
                        title="Delete Review"
                      >
                        <HiTrash size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{rev.content}</p>
                </div>
              );
            })}
            {reviews.length === 0 && (
              <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
                <HiStar className="text-gray-600 mx-auto mb-4" size={48} />
                <p className="text-slate-500 text-lg mb-2">No reviews written yet</p>
                <p className="text-slate-600 text-sm">Write reviews directly from the Tool Details pages to share your thoughts.</p>
              </div>
            )}
          </div>
        )}

        {/* --- SETTINGS TAB --- */}
        {currentTab === 'settings' && (
          <div className="max-w-3xl space-y-8">
            {/* Profile Info */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-slate-900 font-semibold text-lg mb-6 flex items-center gap-2">
                <HiUser className="text-primary-light" /> Profile Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    key={user?.name}
                    defaultValue={user?.name || ''}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-primary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    key={user?.email}
                    defaultValue={user?.email || ''}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-primary/50 outline-none"
                  />
                </div>
              </div>
              <button className="btn-primary mt-6 text-sm">Save Changes</button>
            </div>

            {/* Notifications settings */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-slate-900 font-semibold text-lg mb-6 flex items-center gap-2">
                <HiBell className="text-accent-cyan" /> Notification Preferences
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'New AI Tool Releases', desc: 'Notify me when hot new systems are uploaded.' },
                  { title: 'Comparison Updates', desc: 'Notify me when pricing or status changes for tools I compare.' },
                  { title: 'Security & Access Alerts', desc: 'Critical alerts about my API access keys.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0">
                    <div>
                      <h4 className="text-slate-900 font-medium text-sm">{item.title}</h4>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={idx !== 1} className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-100 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Settings */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-slate-900 font-semibold text-lg mb-6 flex items-center gap-2">
                <HiLockClosed className="text-red-400" /> Account Security
              </h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-primary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-primary/50 outline-none"
                  />
                </div>
              </div>
              <button className="btn-secondary mt-6 text-sm">Change Password</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

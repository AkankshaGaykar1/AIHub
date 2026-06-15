import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCloudArrowUp, HiCheckCircle } from 'react-icons/hi2';

const SubmitTool = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center section-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
            <HiCheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tool Submitted!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Thank you for submitting your AI tool. Our team will review it shortly. Once approved, it will appear in the New Launches section.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="btn-primary w-full"
          >
            Submit Another Tool
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 section-container">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20 mb-4">
            For Creators
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Submit an <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">AI Tool</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Launch your AI product to thousands of users on AIHub.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
        >
          <div className="space-y-6">
            {/* Tool Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Tool Name *</label>
              <input 
                type="text" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="e.g., Cursor"
              />
            </div>

            {/* Website URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Website URL *</label>
              <input 
                type="url" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="https://..."
              />
            </div>

            {/* Category & Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Category *</label>
                <select 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                >
                  <option value="" disabled selected>Select a category</option>
                  <option value="chat">Chat AI</option>
                  <option value="video">Video AI</option>
                  <option value="image">Image AI</option>
                  <option value="coding">Coding AI</option>
                  <option value="voice">Voice AI</option>
                  <option value="productivity">Productivity AI</option>
                  <option value="marketing">Marketing AI</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Pricing Model *</label>
                <select 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                >
                  <option value="" disabled selected>Select pricing</option>
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Short Description *</label>
              <input 
                type="text" 
                required
                maxLength={100}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="A one-sentence summary of what your tool does..."
              />
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Full Description *</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Describe your tool in detail. What are its main features?"
              />
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Tool Logo (Optional)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="space-y-1 text-center">
                  <HiCloudArrowUp className="mx-auto h-12 w-12 text-slate-400 group-hover:text-primary transition-colors" />
                  <div className="flex text-sm text-slate-600 justify-center">
                    <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary-light focus-within:outline-none">
                      <span>Upload a file</span>
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PNG, JPG, GIF up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6 flex justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn-primary px-8 py-3.5 flex items-center justify-center min-w-[160px] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'Submit Tool'
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default SubmitTool;

/**
 * ComparisonTable Component
 * Side-by-side comparison table for AI tools.
 */
import { motion } from 'framer-motion';
import { HiStar, HiCheck, HiXMark } from 'react-icons/hi2';

const ComparisonTable = ({ tools }) => {
  if (!tools || tools.length === 0) return null;

  const rows = [
    { label: 'Category', key: 'category' },
    { label: 'Rating', key: 'rating', type: 'rating' },
    { label: 'Pricing', key: 'pricing' },
    { label: 'Pricing Details', key: 'pricingDetails' },
    { label: 'API Support', key: 'apiSupport', type: 'boolean' },
    { label: 'Mobile Support', key: 'mobileSupport', type: 'boolean' },
    { label: 'Reviews', key: 'reviews', type: 'number' },
  ];

  const renderValue = (tool, row) => {
    const value = tool[row.key];

    if (row.type === 'boolean') {
      return value ? (
        <span className="inline-flex items-center gap-1 text-accent-green">
          <HiCheck size={18} /> Yes
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-red-400">
          <HiXMark size={18} /> No
        </span>
      );
    }

    if (row.type === 'rating') {
      return (
        <span className="inline-flex items-center gap-1">
          <HiStar className="text-amber-400" size={16} />
          <span className="text-slate-900 font-medium">{value}</span>
        </span>
      );
    }

    if (row.type === 'number') {
      return <span className="text-slate-900">{value?.toLocaleString()}</span>;
    }

    return <span className="text-slate-700">{value}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-x-auto"
    >
      <table className="w-full min-w-[600px]">
        {/* Header */}
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-4 px-4 text-slate-500 text-sm font-medium w-40">
              Feature
            </th>
            {tools.map((tool) => (
              <th key={tool.id} className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{tool.logo}</span>
                  <span className="text-slate-900 font-semibold">{tool.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.key} className={`border-b border-slate-200 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
              <td className="py-4 px-4 text-slate-500 text-sm font-medium">
                {row.label}
              </td>
              {tools.map((tool) => (
                <td key={tool.id} className="py-4 px-4 text-center text-sm">
                  {renderValue(tool, row)}
                </td>
              ))}
            </tr>
          ))}

          {/* Features comparison */}
          <tr className="border-b border-slate-200">
            <td className="py-4 px-4 text-slate-500 text-sm font-medium align-top">
              Key Features
            </td>
            {tools.map((tool) => (
              <td key={tool.id} className="py-4 px-4 text-sm">
                <ul className="space-y-1.5">
                  {tool.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <HiCheck className="text-accent-green mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default ComparisonTable;

import React from 'react';

// const stageColor = {
//   prospection: "#3b82f6",
//   qualification: "#eab308",
//   proposition: "#f97316",
//   negotiation: "#10b981",
//   gagne: "#22c55e",
//   perdu: "#ef4444",
// };

// function StageBadge({ stage }) {
//   const color = stageColor[stage] || "#6b7280";
//   return (
//     <span
//       style={{ background: color + "22", color, padding: '6px 10px', borderRadius: 9999, fontWeight: 700 }}
//     >
//       {stage}
//     </span>
//   );
// }

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">💼 Opportunities</h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            + New Opportunity
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Stage</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td colSpan="5" className="py-8 text-center text-gray-500">
                    No opportunities found. Create your first opportunity to get started.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;


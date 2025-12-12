
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
dayjs.extend(relativeTime);

const Opportunities = () => {
  const navigate = useNavigate()
  const colorByStage = {
    prospection: "#3b82f6",
    qualification: "#eab308",
    proposition: "#f97316",
    negotiation: "#10b981",
    gagne: "#22c55e",
    perdu: "#ef4444",
  };
  const opportunities = useSelector((state) => state.opportunities);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800">
            💼 Opportunities
          </h1>
          <button onClick={()=>navigate('/addOpportunity')} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            + New Opportunity
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="border-b border-gray-200 ">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Company
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Stage
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {opportunities.length == 0 && (
                  <tr className="border-b border-gray-100">
                    <td colSpan="5" className="py-8 text-center text-gray-500">
                      No opportunities found. Create your first opportunity to
                      get started.
                    </td>
                  </tr>
                )}
                {opportunities.map((item, index) => (
                  <tr key={index} className="border-b-2 border-gray-100">
                    <td className="text-left py-3 px-4 text-gray-700">
                      {item.entreprise}
                    </td>
                    <td className="text-left py-3 px-4 text-gray-700">
                      {item.montant}
                    </td>
                    <td className="text-left py-3 px-4 text-gray-700">
                      <span
                        style={{ backgroundColor: colorByStage[item.status] }}
                        className="px-3 py-2 font-500 text-white rounded-2xl"
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{dayjs(item.date).toString().slice(4, 17)}</td>
                    <td className="text-left  py-3 px-4 text-gray-700 flex gap-2">
                      <span class="material-symbols-outlined text-blue-700 scale-90 cursor-pointer "
                      onClick={()=> navigate(`/opportunities/${item.id}`)}>
                        visibility
                      </span>
                      
                      <span class="material-symbols-outlined text-green-700 scale-90 cursor-pointer"
                        onClick={() => navigate(`/editOpportunity/${item.id}`)}
                      >
                        edit
                      </span>
                      {/* herre make onclick on this span */}
                      <span class="material-symbols-outlined text-red-700 scale-90 cursor-pointer"
                        onClick={() => {
                          if (window.confirm(`Delete opportunity "${item.entreprise}"?`)) {
                            dispatch({ type: 'opportinities/deleteOpprtinity', payload: item.id });
                          }
                        }}
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;

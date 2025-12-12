import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const OpportunityDetails = () => {
  const opportunities = useSelector((state) => state.opportunities);
  const navigate = useNavigate();
  const { id } = useParams();
  const opportunity = opportunities.find((item) => item.id == parseInt(id));
  const colorByStage = {
    prospection: "#3b82f6",
    qualification: "#eab308",
    proposition: "#f97316",
    negotiation: "#10b981",
    gagne: "#22c55e",
    perdu: "#ef4444",
  };

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-800">
            🎯 Opportunity Details
          </h1>
          <div className="bg-white py-3 mt-7 min-h-132 px-5">
            <div className="p-4">
              <button
                className=" hover:bg-red-500 cursor-pointer py-2 px-6  hover:text-white text-md font-monospace font-semibold "
                onClick={() => navigate(-1)}
              >
                ⟵ Back
              </button>
            </div>
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">Opportunity not found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800">
          🎯 Opportunity Details
        </h1>

        <div className="bg-white py-3 mt-7 min-h-132 px-5">
          <div className="p-4">
            <button
              className=" hover:bg-red-500 cursor-pointer py-2 px-6  hover:text-white text-md font-monospace font-semibold "
              onClick={() => navigate(-1)}
            >
              ⟵ Back
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ps-8">
            {/* Opportinity info */}
            <div className="col-span-2 shadow-md p-4 ps-4 rounded-md border-2 border-gray-100">
              <h2 className="font-bold text-xl capitalize pb-3">
                {opportunity.entreprise}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-600  font-semibold">Phone</span>
                  <h2 className="py-2">{opportunity.telephone}</h2>
                </div>
                <div>
                  <span className="text-slate-600 font-semibold">Email</span>
                  <h2 className="py-2" > {opportunity.email}</h2>
                </div>
                <div>
                  <span className="text-slate-600 font-semibold">Contact</span>
                  <h2 className="py-2">{opportunity.contact}</h2>
                </div>
              </div>
            </div>
            {/* Opportunity stage */}
            <div className="shadow-md p-4 ps-4 border-2 border-gray-100 rounded-md">
              <h2 className="font-semibold text-lg capitalize pb-3">
                Current stage
              </h2>
              <h1
                className="text-center mt-10  py-2 px-12 rounded-lg font-bold text-white"
                style={{ backgroundColor: colorByStage[opportunity.status] }}
              >
                {opportunity.status}
              </h1>
            </div>
            {/* Deal Info */}
            <div className="col-span-2 shadow-md p-4 ps-4 rounded-md border-2 border-slate-100">
              <h2 className="font-semibold text-lg capitalize pb-3">
                Deal details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-600 font-normal">
                    Deal Amount
                  </span>
                  <h2 className="text-2xl font-extrabold py-2 text-indigo-500">
                    {opportunity.montant} MAD
                  </h2>
                </div>
                <div>
                  <span className="text-slate-600 font-normal ">
                    Win Probability
                  </span>
                  <h1 className="text-2xl font-extrabold text-cyan-500 py-2">
                    {opportunity.probabilite}%
                  </h1>
                </div>
              </div>
            </div>
            <div className="shadow-md p-4 ps-4 border-2 border-gray-100 rounded-md">
              <h2 className="font-semibold text-lg capitalize ">
                Source
              </h2>
              <h1
                className="mt-8 text-sm py-1 px-5 w-fit rounded-lg font-bold text-white"
                style={{ backgroundColor: colorByStage[opportunity.status] }}
              >
                {opportunity.source}
              </h1>
            </div>
            {/* Timeline Deal */}
            <div className="col-span-2 shadow-md p-4 ps-4 rounded-md border-2 border-gray-100">
              <h2 className="font-semibold text-xl capitalize pb-3">
                Timeline
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-600 font-semibold">Created at</span>
                  <h2 className="py-2">{opportunity.date}</h2>
                </div>
                <div>
                  <span className="text-slate-600 font-semibold ">Expected Close </span>
                  <h2 className="py-2">{opportunity.date}</h2>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetails;

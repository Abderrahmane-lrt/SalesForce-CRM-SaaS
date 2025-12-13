import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  LineChart,
  CartesianGrid,
  Line,
} from "recharts";

const Dashboard = () => {
  const opportunities = useSelector((state) => state.opportunities);
  const lastOpportunity = opportunities.at(-1);
  const colorByStage = {
    prospection: "#3b82f6",
    qualification: "#eab308",
    proposition: "#f97316",
    negotiation: "#10b981",
    gagne: "#22c55e",
    perdu: "#ef4444",
  };
  const data = [
    { stage: "prospection", value: 12 },
    { stage: "qualification", value: 8 },
    { stage: "proposition", value: 5 },
    { stage: "negotiation", value: 3 },
    { stage: "gagne", value: 5 },
    { stage: "perdu", value: 2 },
  ];
  const winLossData = [
    {
      name: "Won",
      value: opportunities.filter((o) => o.status === "gagne").length,
      color: "#22c55e",
    },
    {
      name: "Lost",
      value: opportunities.filter((o) => o.status === "perdu").length,
      color: "#ef4444",
    },
  ];
  const opportunitiesByDate = Object.entries(
    opportunities.reduce((acc, opp) => {
      const date = new Date(opp.date).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {})
  ).map(([date, count]) => ({ date, count }));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Dashboard
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-medium">
           This dashboard gives you a real-time overview of your sales
            pipeline, performance trends, and deal outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Opportunities
            </h3>
            <p className="text-3xl font-bold text-orange-500">
              {opportunities.length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Active Deals
            </h3>
            <p className="text-3xl font-bold text-green-500">2</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-blue-500">50000 MAD</p>
          </div>
        </div>
        <div className="my-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Latest update in your sales pipeline
          </p>

          {lastOpportunity ? (
            <div className="flex items-center gap-2 px-6 bg-orange-500 py-3 rounded-lg  text-white mb-8 font-bold">
              <span className="font-medium ">{lastOpportunity.entreprise}</span>
              moved to
              <span className="font-semibold ">{lastOpportunity.status}</span>
              with probability
              <span className="font-semibold ">
                {lastOpportunity.probabilite}%
              </span>
            </div>
          ) : (
            <p className="text-gray-500">No recent activity</p>
          )}
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow mt-3">
        <h2 className="font-semibold mb-4">Pipeline Overview</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((element, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorByStage[element.stage]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="font-semibold mb-4">Win / Loss Stats</h2>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={winLossData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {winLossData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="font-semibold mb-4">Opportunities Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={opportunitiesByDate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="count"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

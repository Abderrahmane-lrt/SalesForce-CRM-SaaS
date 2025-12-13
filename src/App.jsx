import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./home/Home";
import DashboardLayout from "./publicLayout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Pipeline from "./pages/Pipeline";
import NotFound from "./not-found";
import { BlinkBlur } from "react-loading-indicators";
import OpportunitiesSelector from "./opportinities";
import AddOpportunity from "./pages/addopportunity";
import OpportunityDetails from "./pages/OpportunityDetails";
import EditOpportunity from "./pages/editopportunity";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/dashboard") {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Loading */}
      {loading && (
        <div className="fullpage-loader">
          <BlinkBlur
            color={["#ff6100"]}
            size="medium"
            text="Please wait..."
            textColor="#000000"
          />
        </div>
      )}

      {/* Toaste Notifications */}
      <div className="absolute">
        <Toaster richColors position="top-right" />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<OpportunitiesSelector />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/pipline" element={<Pipeline />} />
          <Route
            path="/opportunities/:id"
            element={<OpportunityDetails />}
          ></Route>
          <Route path="/editOpportunity/:id" element={<EditOpportunity />} />
          <Route path="/addOpportunity" element={<AddOpportunity />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

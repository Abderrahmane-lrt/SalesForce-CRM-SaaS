import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./home/Home";
import DashboardLayout from "./publicLayout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Pipeline from "./pages/Pipeline";
import NotFound from "./not-found";
import { Atom, BlinkBlur } from "react-loading-indicators";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Loading */}
      {loading && (
        <div className="fullpage-loader">
          <BlinkBlur color={['#ff6100']} size="medium" text="Please wait..." textColor="#000000" />
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/pipline" element={<Pipeline />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

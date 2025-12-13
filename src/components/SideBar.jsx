import { Navigate, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="w-64 bg-black text-white p-6 flex flex-col gap-6 min-h-screen pt-10">
      <img
        src={logo}
        alt=""
        width={100}
        className="bg-white w-100 p-3 rounded-md mb-4"
      />

      <nav className="flex flex-col gap-4 flex-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <span class="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink
          to="/pipeline"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <span class="material-symbols-outlined">format_list_bulleted</span>
            <span>Pipeline</span>
          </div>
        </NavLink>
        <NavLink
          to="/opportunities"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`
          }
        >
          <div className="flex items-center gap-2">
            <span class="material-symbols-outlined">business_center</span>
            <span>Opportunities</span>
          </div>
        </NavLink>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700 text-sm text-gray-300">
        <button
          onClick={() => navigate("/")}
          className="py-2 font-bold cursor-pointer rounded-sm px-16 hover:bg-red-600 "
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

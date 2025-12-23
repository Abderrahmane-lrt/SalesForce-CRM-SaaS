import { NavLink } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { toast } from "sonner";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, onToggle }) => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("You have been signed out successfully.");
      window.location.href = "/";
    } catch (error) {
      toast.error("Failed to sign out. Please try again.");
      console.error("Logout error:", error);
    }
  };

  return (
    <aside
      className={`bg-gray-900 text-white flex flex-col gap-6 min-h-screen pt-6 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64 p-6" : "w-0 p-0 overflow-hidden"
      }`}
    >
      <div
        className={`flex items-center gap-3 pb-4 ${
          !isOpen ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <img
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        {isOpen && (
          <span className="text-lg font-bold text-white">SalesForce CRM</span>
        )}
      </div>

      <nav
        className={`flex flex-col gap-4 flex-1 border-t border-gray-700 pt-4 ${
          !isOpen ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`
          }
          onClick={() => {
            if (window.innerWidth < 768) {
              onToggle();
            }
          }}
        >
          <div className="flex items-center gap-2">
            <span class="material-symbols-outlined">speed</span>
            {isOpen && <span>Dashboard</span>}
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
          onClick={() => {
            if (window.innerWidth < 768) {
              onToggle();
            }
          }}
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">
              format_list_bulleted
            </span>
            {isOpen && <span>Pipeline</span>}
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
          onClick={() => {
            if (window.innerWidth < 768) {
              onToggle();
            }
          }}
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">business_center</span>
            {isOpen && <span>Opportunities</span>}
          </div>
        </NavLink>
      </nav>

      <div
        className={`mt-auto pt-4 border-t border-gray-700 ${
          !isOpen ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <button
          onClick={handleLogout}
          className="w-full py-2 font-bold cursor-pointer rounded-sm px-4 hover:bg-red-600 transition-colors text-gray-300"
        >
          {isOpen && "Logout"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

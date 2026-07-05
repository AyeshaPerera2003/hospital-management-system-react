import { NavLink } from "react-router-dom";
import {
  FaHospital,
  FaHome,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaPills,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", path: "/", icon: <FaHome /> },
  { name: "Patients", path: "/patients", icon: <FaUserInjured /> },
  { name: "Doctors", path: "/doctors", icon: <FaUserMd /> },
  { name: "Appointments", path: "/appointments", icon: <FaCalendarCheck /> },
  { name: "Billing", path: "/billing", icon: <FaMoneyBillWave /> },
  { name: "Pharmacy", path: "/pharmacy", icon: <FaPills /> },
  { name: "Reports", path: "/reports", icon: <FaChartBar /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-700 text-white flex flex-col">
      <div className="flex items-center gap-3 p-6 text-2xl font-bold border-b border-blue-600">
        <FaHospital size={28} />
        <span>Hospital HMS</span>
      </div>

      <nav className="flex-1 mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition ${
                isActive
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
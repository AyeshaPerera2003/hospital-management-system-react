import DashboardCard from "../../components/dashboard/DashboardCard";
import AppointmentChart from "../../components/charts/AppointmentChart";

import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaDollarSign,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <DashboardCard
          title="Patients"
          value="1250"
          icon={<FaUserInjured />}
          color="border-blue-600"
        />

        <DashboardCard
          title="Doctors"
          value="68"
          icon={<FaUserMd />}
          color="border-green-600"
        />

        <DashboardCard
          title="Appointments"
          value="246"
          icon={<FaCalendarCheck />}
          color="border-orange-500"
        />

        <DashboardCard
          title="Revenue"
          value="$18,240"
          icon={<FaDollarSign />}
          color="border-purple-600"
        />

      </div>

      {/* Chart */}
      <AppointmentChart />

    </div>
  );
}

export default Dashboard;
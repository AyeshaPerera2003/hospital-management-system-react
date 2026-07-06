import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { departmentData } from "../../data/chartData";

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function DepartmentChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">
        Department Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={departmentData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {departmentData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DepartmentChart;
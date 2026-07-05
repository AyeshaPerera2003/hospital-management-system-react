function RecentPatients() {
  const patients = [
    {
      id: 1,
      name: "John Smith",
      age: 35,
      gender: "Male",
      status: "Admitted",
    },
    {
      id: 2,
      name: "Emma Johnson",
      age: 28,
      gender: "Female",
      status: "Discharged",
    },
    {
      id: 3,
      name: "David Brown",
      age: 42,
      gender: "Male",
      status: "Under Treatment",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Patients</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Age</th>
            <th className="text-left py-2">Gender</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentPatients;
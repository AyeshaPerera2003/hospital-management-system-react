import { FaEdit, FaTrash } from "react-icons/fa";


function PatientTable({ patients, search, status }) {
  const filteredPatients = patients.filter((patient) => {
  const matchesSearch = patient.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    status === "All" || patient.status === status;

  return matchesSearch && matchesStatus;

  
});


 
  return (
    <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">ID</th>
            <th className="text-left py-3">Name</th>
            <th className="text-left py-3">Age</th>
            <th className="text-left py-3">Gender</th>
            <th className="text-left py-3">Blood</th>
            <th className="text-left py-3">Phone</th>
            <th className="text-left py-3">Status</th>
            <th className="text-center py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.bloodGroup}</td>
              <td>{patient.phone}</td>
              <td>{patient.status}</td>
              <td className="text-center space-x-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>

                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;
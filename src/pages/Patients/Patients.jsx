import { useState } from "react";

import PatientTable from "../../components/patients/PatientTable";
import SearchBar from "../../components/patients/SearchBar";
import StatusFilter from "../../components/patients/StatusFilter";

function Patients() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Patients
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Patient
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <StatusFilter
          status={status}
          setStatus={setStatus}
        />
      </div>

      <PatientTable
        search={search}
        status={status}
      />
    </div>
  );
}

export default Patients;
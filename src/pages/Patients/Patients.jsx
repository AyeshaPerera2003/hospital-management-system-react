import { useState } from "react";

import PatientTable from "../../components/patients/PatientTable";
import SearchBar from "../../components/patients/SearchBar";
import StatusFilter from "../../components/patients/StatusFilter";
import Modal from "../../components/common/Modal";
import PatientForm from "../../components/patients/PatientForm";


function Patients() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Patients
        </h1>

        <button
           onClick={() => setIsModalOpen(true)}
           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Patient"
      >
         <PatientForm
    onSuccess={() => {
      setIsModalOpen(false);
    }}
  />
      </Modal>
    </div>
    
  );
}


export default Patients;
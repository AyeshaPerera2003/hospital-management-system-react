import { useState } from "react";

import initialPatients from "../../data/patients";

import PatientTable from "../../components/patients/PatientTable";
import SearchBar from "../../components/patients/SearchBar";
import StatusFilter from "../../components/patients/StatusFilter";
import PatientForm from "../../components/patients/PatientForm";
import Modal from "../../components/common/Modal";

function Patients() {
  // Patient Data
  const [patients, setPatients] = useState(initialPatients);

  // Search State
  const [search, setSearch] = useState("");

  // Status Filter State
  const [status, setStatus] = useState("All");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Edit Patient
  const [editingPatient, setEditingPatient] = useState(null);

  // Add Patient
  const addPatient = (newPatient) => {
    const patient = {
      ...newPatient,
      id: Date.now(),
    };

    setPatients((prevPatients) => [...prevPatients, patient]);
    setIsModalOpen(false);
  };

  // Update Patient
  const updatePatient = (updatedPatient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );

    setEditingPatient(null);
    setIsModalOpen(false);
  };

  // Open Edit Modal
  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setIsModalOpen(true);
  };

  // Delete Patient
  const deletePatient = (id) => {
    setPatients((prevPatients) =>
      prevPatients.filter((patient) => patient.id !== id)
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Patients
        </h1>

        <button
          onClick={() => {
            setEditingPatient(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add Patient
        </button>
      </div>

      {/* Search & Filter */}
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

      {/* Patient Table */}
      <PatientTable
        patients={patients}
        search={search}
        status={status}
        onEdit={handleEdit}
        onDelete={deletePatient}
      />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPatient(null);
        }}
        title={editingPatient ? "Edit Patient" : "Add New Patient"}
      >
        <PatientForm
          onSuccess={editingPatient ? updatePatient : addPatient}
          editingPatient={editingPatient}
        />
      </Modal>
    </div>
  );
}

export default Patients;
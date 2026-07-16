import Modal from "../common/Modal";

function DeleteModal({ isOpen, onClose, onConfirm, patient }) {
	if (!patient) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Confirm Delete">
			<p className="mb-4">Are you sure you want to delete <strong>{patient.name}</strong>?</p>

			<div className="flex justify-end gap-3">
				<button
					onClick={onClose}
					className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
				>
					Cancel
				</button>

				<button
					onClick={() => onConfirm(patient.id)}
					className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
				>
					Delete
				</button>
			</div>
		</Modal>
	);
}

export default DeleteModal;

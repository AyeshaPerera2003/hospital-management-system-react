function StatusFilter({ status, setStatus }) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option value="All">All Status</option>
      <option value="Admitted">Admitted</option>
      <option value="Under Treatment">Under Treatment</option>
      <option value="Discharged">Discharged</option>
    </select>
  );
}

export default StatusFilter;
function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      patient: "Emma Watson",
      doctor: "Dr. John Smith",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "David Brown",
      doctor: "Dr. Sarah Wilson",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "James Anderson",
      doctor: "Dr. Michael Lee",
      time: "11:45 AM",
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Upcoming Appointments
      </h2>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <h3 className="font-semibold">{appointment.patient}</h3>

              <p className="text-sm text-gray-500">
                {appointment.doctor}
              </p>

              <p className="text-sm text-blue-600">
                {appointment.time}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                appointment.status
              )}`}
            >
              {appointment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingAppointments;
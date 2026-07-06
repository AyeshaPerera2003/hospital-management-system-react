function TodaySchedule() {
  const schedules = [
    {
      id: 1,
      doctor: "Dr. John Smith",
      department: "Cardiology",
      time: "09:00 AM - 11:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Sarah Wilson",
      department: "Neurology",
      time: "11:30 AM - 01:30 PM",
    },
    {
      id: 3,
      doctor: "Dr. Michael Lee",
      department: "Orthopedics",
      time: "02:00 PM - 05:00 PM",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Today's Schedule
      </h2>

      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold">{schedule.doctor}</h3>

            <p className="text-gray-500">
              {schedule.department}
            </p>

            <p className="text-blue-600 font-medium">
              {schedule.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaySchedule;
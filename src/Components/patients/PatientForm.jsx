import { useForm } from "react-hook-form";

function PatientForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert("Patient Added Successfully!");

    reset();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Add New Patient
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Full Name */}
        <div>
          <label className="font-medium">
            Full Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full border rounded-lg p-2 mt-1"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="font-medium">
            Age
          </label>

          <input
            type="number"
            {...register("age", {
              required: "Age is required",
            })}
            className="w-full border rounded-lg p-2 mt-1"
          />

          {errors.age && (
            <p className="text-red-500 text-sm">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="font-medium">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Blood Group */}
        <div>
          <label className="font-medium">
            Blood Group
          </label>

          <select
            {...register("bloodGroup")}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        {/* Phone */}
        <div>
          <label className="font-medium">
            Phone
          </label>

          <input
            {...register("phone")}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Status */}
        <div>
          <label className="font-medium">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option>Admitted</option>
            <option>Under Treatment</option>
            <option>Discharged</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="font-medium">
            Address
          </label>

          <textarea
            {...register("address")}
            rows="3"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        <button
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Save Patient
        </button>
      </form>
    </div>
  );
}

export default PatientForm;
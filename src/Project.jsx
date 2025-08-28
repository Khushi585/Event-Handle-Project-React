import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

function EventRegistrationForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        reset();
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 bg-dark text-light">
                <h3 className="text-center text-info mb-4">🎉 Event Registration Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Full Name is required" })}
                            className="form-control"
                        />
                        <p className="text-danger">{errors.name?.message}</p>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="form-control"
                        />
                        <p className="text-danger">{errors.email?.message}</p>
                    </div>

                    {/* Event Selection */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Select Event</label>
                        <select
                            className="form-select"
                            {...register("event", { required: "Please select an event" })}
                        >
                            <option value="">-- Choose Event --</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Seminar">Seminar</option>
                            <option value="Hackathon">Hackathon</option>
                            <option value="Music Night">Music Night</option>
                        </select>
                        <p className="text-danger">{errors.event?.message}</p>
                    </div>

                    {/* Ticket Type */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Ticket Type</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                value="Standard"
                                {...register("ticket", { required: "Select a ticket type" })}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Standard</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                value="VIP"
                                {...register("ticket", { required: "Select a ticket type" })}
                                className="form-check-input"
                            />
                            <label className="form-check-label">VIP</label>
                        </div>
                        <p className="text-danger">{errors.ticket?.message}</p>
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Preferred Date</label>
                        <input
                            type="date"
                            {...register("date", { required: "Date is required" })}
                            className="form-control"
                        />
                        <p className="text-danger">{errors.date?.message}</p>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-info fw-bold py-2 w-50">
                            Register Now 🚀
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EventRegistrationForm;

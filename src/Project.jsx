import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EventRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        event: "",
        ticket: "",
        date: "",
    });

    const [submittedData, setSubmittedData] = useState(null);

    // Single input handler
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            // (Not used here, but kept for logic consistency if later needed)
            setFormData((prev) => ({
                ...prev,
                [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);

        setSubmittedData(formData);

        // Reset
        setFormData({
            fullName: "",
            email: "",
            event: "",
            ticket: "",
            date: "",
        });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 bg-dark text-light">
                <h3 className="text-center text-info mb-4">🎉 Event Registration Form</h3>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                    {/* Event Selection */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Select Event</label>
                        <select
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">-- Choose Event --</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Seminar">Seminar</option>
                            <option value="Hackathon">Hackathon</option>
                            <option value="Music Night">Music Night</option>
                        </select>
                    </div>

                    {/* Ticket Type */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Ticket Type</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="ticket"
                                value="Standard"
                                checked={formData.ticket === "Standard"}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Standard</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="ticket"
                                value="VIP"
                                checked={formData.ticket === "VIP"}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">VIP</label>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Preferred Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-info fw-bold py-2 w-50">
                            Register Now 🚀
                        </button>
                    </div>
                </form>
            </div>

            {/* Submitted Data */}
            {submittedData && (
                <div className="card shadow p-4 mt-4">
                    <h4 className="text-success">Submitted Registration</h4>
                    <p><b>Full Name:</b> {submittedData.fullName}</p>
                    <p><b>Email:</b> {submittedData.email}</p>
                    <p><b>Event:</b> {submittedData.event}</p>
                    <p><b>Ticket Type:</b> {submittedData.ticket}</p>
                    <p><b>Date:</b> {submittedData.date}</p>
                </div>
            )}
        </div>
    );
}

export default EventRegistrationForm;
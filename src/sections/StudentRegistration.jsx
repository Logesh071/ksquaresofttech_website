import { useState } from "react";

function StudentRegistration() {
  const initialForm = {
    studentName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    qualification: "",
    college: "",
    course: "",
    batch: "",
    joiningDate: "",
    fees: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Student Registered Successfully!");

    setFormData(initialForm);
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-3">
              <h2>Student Registration Form</h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Father Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mother Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">College / School</label>
                    <input
                      type="text"
                      className="form-control"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Course</label>
                    <select
                      className="form-select"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="">Select Course</option>
                      <option>Full Stack Development</option>
                      <option>Python</option>
                      <option>Data Science</option>
                      <option>Data Analytics</option>
                      <option>AI & ML</option>
                      <option>Digital Marketing</option>
                      <option>Web Development</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Batch</label>
                    <input
                      type="text"
                      className="form-control"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Joining Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="joiningDate"
                      value={formData.joiningDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label">Course Fees</label>
                    <input
                      type="number"
                      className="form-control"
                      name="fees"
                      value={formData.fees}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-primary px-5">
                    Register Student
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentRegistration;

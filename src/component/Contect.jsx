import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // يمنع reload

    Swal.fire({
      icon: "success",
      title: "Message Sent ✅",
      text: "Your message has been received and we will contact you soon.",
      confirmButtonColor: "#0d6efd",
    });

    e.target.reset(); // يفضّي الفورم بعد الإرسال
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

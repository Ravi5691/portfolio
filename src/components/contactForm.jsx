import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_okpaxhr",   // Replace with your EmailJS Service ID
        "template_30o5tgp",  // Replace with your EmailJS Template ID
        formData,
        "DDlmnPstkVzY1YZGP"    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto lg:mb-0  mb-10 font-mono px-5 lg:py-18 py-5 flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-30 ">
    <div className="lg:w-[45%] w-full p-5 pb-10 shadow-md rounded-2xl border-2 border-[rgba(255,255,255,0.71)] relative lg:mb-0 mb-20">
      <h2 className="lg:text-2xl text-lg font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-white to-purple-500 bg-clip-text text-transparent">Contact Me</h2>
      <form onSubmit={handleSubmit} className="lg:space-y-4 space-y-2">
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-2 border border-[rgba(255,255,255,0.71)] rounded-md"
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-2 border border-[rgba(255,255,255,0.71)] rounded-md"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-2 border border-[rgba(255,255,255,0.71)] rounded-md lg:h-32 h-24"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-2 rounded-md hover:bg-gradient-to-tl"
        >
          Send Message
        </button>
      </form>
      {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
    </div>
    <div className="lg:w-1/2 w-full flex flex-col p-5">
      <p className="lg:text-xl text-sm lg:py-5 py-2">I'd love to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.</p>
      <span className="lg:text-xl text-sm"><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Mobile:</span> +91 93112 50966</span>
      <br className="lg:unhidden hidden" />
      <span className="lg:text-xl text-sm"><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Location:</span> New Delhi, India</span>
      <br />
    </div>
    </div>
  );
};

export default ContactForm;

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
    <div className="w-screen font-mono mx-20 px-10 py-5 my-5 flex lg:flex-row justify-items-center place-items-center flex-col-reverse">
    <div className=" m-20 w-[30%] p-10 pb-10 shadow-md rounded-2xl border-2 border-[rgba(255,255,255,0.71)] relative">
      <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-white to-purple-500 bg-clip-text text-transparent">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full p-2 border border-[rgba(255,255,255,0.71)] rounded-md h-32"
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
    <div className=" m-20 w-[30%] flex flex-col ">
      <p className="text-xl py-5 ">I'd love to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.</p>
      <span className="text-xl"><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Mobile:</span> +91 93112 50966</span>
      <br />
      <span className="text-xl "><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Location:</span> New Delhi, India</span>
      <br />
    </div>
    </div>
  );
};

export default ContactForm;

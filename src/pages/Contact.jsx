import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all the fields.");
      return;
    }

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://formsubmit.co/hamanthapa0000@gmail.com', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong. Please try later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-2xl w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Let’s Work Together 👋</h2>
        <p className="text-gray-400 mb-10 text-center">
          Got a project idea or just want to say hi? I’m always open to exciting new opportunities and collaborations. Reach out below!
        </p>

        {/* Contact Info */}
        <div className="text-gray-300 text-center space-y-3 mb-10">
          <p>
            📧 Email:
            <a href="mailto:hamanthapa0000@gamil.com" className="text-blue-400 hover:underline ml-1">
              hamanthapa00000@gamil.com
            </a>
          </p>
          <p>
            💻 GitHub:
            <a href="https://github.com/Haman-to-thapa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
              github.com/Haman-to-thapa
            </a>
          </p>
          <p>
            💼 LinkedIn:
            <a href="http://linkedin.com/in/haman-thapa-44658034b" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
              linkedin.com/in/haman-thapa-44658034b
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/c4e93bdd868b062c5302f7d1e19aca95"
          method="POST"
          onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full bg-[#1f1f1f] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eb5951]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full bg-[#1f1f1f] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eb5951]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="4"
            className="w-full bg-[#1f1f1f] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eb5951]"
            required
          />
          <button
            type="submit"
            className="bg-[#eb5951] text-white py-2 px-6 rounded-lg hover:bg-[#d44c44] transition-all duration-300 w-full"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-4 text-sm text-green-400">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

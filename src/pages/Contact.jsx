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
    <section className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-200 flex items-center justify-center p-6 sm:p-12 transition-colors duration-300">
      <div className="max-w-2xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">Let’s Work Together 👋</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center text-lg font-light">
          Got a project idea or just want to say hi? I’m always open to exciting new opportunities and collaborations. Reach out below!
        </p>

        {/* Contact Info */}
        <div className="text-gray-600 dark:text-gray-400 text-center space-y-4 mb-12">
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
            <a href="mailto:hamanthapa00000@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
              hamanthapa00000@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">GitHub:</span>
            <a href="https://github.com/Haman-to-thapa" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
              github.com/Haman-to-thapa
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">LinkedIn:</span>
            <a href="https://linkedin.com/in/haman-thapa-44658034b" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
              linkedin.com/in/haman-thapa-44658034b
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/c4e93bdd868b062c5302f7d1e19aca95"
          method="POST"
          onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="5"
            className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
            required
          />
          <button
            type="submit"
            className="bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-lg hover:opacity-80 transition-all duration-300 w-full"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p className={`text-center mt-4 text-sm ${status.includes('✅') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

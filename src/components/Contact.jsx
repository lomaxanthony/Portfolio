import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Message sent successfully! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 text-white placeholder-gray-400 transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 text-white placeholder-gray-400 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 text-white placeholder-gray-400 transition-colors duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 text-white placeholder-gray-400 transition-colors duration-200 resize-vertical"
                placeholder="Tell me about your project, question, or just say hello!"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white border border-green-300 font-medium rounded-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 shadow-lg flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Message feedback */}
        {message && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              message.includes("successfully")
                ? "bg-green-900/50 text-green-200 border border-green-500/30"
                : "bg-red-900/50 text-red-200 border border-red-500/30"
            }`}
          >
            <p className="text-center font-medium">{message}</p>
          </div>
        )}

        {/* Resume Download Section - moved below the form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 mt-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Download My Resume
              </h4>
            </div>
            <a
              href="/Portfolio/public/Portfolio/LomaxAnthonyResume25.pdf"
              download="LomaxAnthonyResume25.pdf"
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white border border-blue-300 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
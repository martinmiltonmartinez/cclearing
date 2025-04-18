import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Book = () => {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
  "idle"
 );
 const formRef = useRef<HTMLFormElement>(null);

 const [formData, setFormData] = useState({
  full_name: "",
  business_email: "",
  company_name: "",
  message: "",
 });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); // Prevent page reload

  if (!formRef.current) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
   await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOK,
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   );
   setSubmitStatus("success");
   formRef.current.reset(); // Reset the form
   setFormData({
    full_name: "",
    business_email: "",
    company_name: "",
    message: "",
   });
  } catch (error) {
   console.error("Failed to send email:", error);
   setSubmitStatus("error");
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <>
   <div className="pt-24 pb-16 bg-[#0A0B14] px-4 py-12">
    <div className="w-full max-w-2xl mx-auto">
     <div className="bg-[#0F1118] rounded-2xl shadow-xl p-8 max-w-xl mx-auto border border-gray-800">
      <h2 className="text-[28px] font-semibold text-white mb-3">
       Schedule a Meeting
      </h2>
      <p className="text-gray-400 mb-8">
       Book a personalized session with our payment specialists to discover how
       CClearing can transform your online casino's payment infrastructure.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
       <label
        htmlFor="full_name"
        className="block mb-2 text-[15px] font-medium text-gray-300"
       >
        Full Name
       </label>
       <input
        className="w-full px-4 py-3 rounded-lg
    bg-[#1A1C26] border border-gray-700
    focus:outline-none focus:border-gray-600
    text-white text-base
    placeholder-gray-500"
        id="full_name"
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
        required
       />
       <label
        htmlFor="business_email"
        className="block mb-2 text-[15px] font-medium text-gray-300"
       >
        Business Email
       </label>
       <input
        className="w-full px-4 py-3 rounded-lg
    bg-[#1A1C26] border border-gray-700
    focus:outline-none focus:border-gray-600
    text-white text-base
    placeholder-gray-500"
        id="business_email"
        type="email"
        name="business_email"
        value={formData.business_email}
        onChange={handleChange}
        required
       />
       <label
        htmlFor="company_name"
        className="block mb-2 text-[15px] font-medium text-gray-300"
       >
        Company Name
       </label>
       <input
        className="w-full px-4 py-3 rounded-lg
    bg-[#1A1C26] border border-gray-700
    focus:outline-none focus:border-gray-600
    text-white text-base
    placeholder-gray-500"
        id="company_name"
        name="company_name"
        value={formData.company_name}
        onChange={handleChange}
        required
       />
       <label
        htmlFor="message"
        className="block mb-2 text-[15px] font-medium text-gray-300"
       >
        Message (Optional)
       </label>
       <textarea
        className="w-full px-4 py-3 rounded-lg
    bg-[#1A1C26] border border-gray-700
    focus:outline-none focus:border-gray-600
    text-white text-base
    placeholder-gray-500"
        id="message"
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
       />

       <button
        type="submit"
        disabled={isSubmitting}
        className={`
            w-full py-4 px-6 mt-4 text-white bg-[#00F59B] rounded-lg
            font-medium text-base
            transition-all duration-200
            hover:bg-[#00D989]
            disabled:opacity-70 disabled:cursor-not-allowed
            text-[#0A0B14]
          ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
       >
        <span>{isSubmitting ? "Scheduling..." : "Schedule Meeting"}</span>
       </button>
       {submitStatus === "success" && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
       )}
       {submitStatus === "error" && (
        <p className="text-red-500 text-center">
         Failed to send message. Please try again.
        </p>
       )}
      </form>
     </div>
    </div>
   </div>
  </>
 );
};

export default Book;

"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_pl9e88q",     // EmailJS Service ID
        "template_34mc28d",    // Template ID
        form.current,
        "IPRvN-hZiUS5YLEnp"    // Public key (user ID)
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-900 text-white py-10 text-center">
      {/* Hidden Form */}
      <form ref={form} className="hidden">
        <input type="text" name="user_name" value="Visitor" readOnly />
        <input type="email" name="user_email" value="visitor@mail.com" readOnly />
        <textarea
          name="user_message"
          defaultValue="Contact initiated from the portfolio website."
        />
      </form>
    </div>
  );
};

export default Contact;

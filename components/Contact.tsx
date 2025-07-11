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
        "service_pl9e88q",     // EmailJS'deki Service ID
        "template_34mc28d",    // Template ID
        form.current,
        "IPRvN-hZiUS5YLEnp"      // Public key (kullanıcı kimliği)
      )
      .then(
        () => {
          alert("Mesajınız başarıyla gönderildi!");
          form.current?.reset();
        },
        (error) => {
          console.error("Hata:", error.text);
          alert("Mesaj gönderilemedi, lütfen tekrar deneyin.");
        }
      );
  };
  return (
    <div className="bg-gray-900 text-white py-10 text-center">
      {/* Gizli Form */}
      <form ref={form} className="hidden">
        <input type="text" name="user_name" value="Ziyaretçi" readOnly />
        <input type="email" name="user_email" value="ziyaretci@mail.com" readOnly />
        <textarea name="user_message" defaultValue="Portfolyo sitesinden iletişim kuruldu." />
      </form>
    </div>
  );
};

export default Contact;
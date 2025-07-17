import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
export default function Contact() {
  const {
    register,

    formState: { errors },
  } = useForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="repe">
        <form action="https:/formsubmit.co/richiemanu0@gmail.com" method="POST">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            {...register("message", { required: true })}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

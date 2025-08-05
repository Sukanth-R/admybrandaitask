import React, { useState } from 'react';
import Button from './Button';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 text-gray-800"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 text-gray-800"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2 text-gray-800"
        required
      />
      <Button type="submit">Send</Button>
      {submitted && <p className="text-green-600">Thank you for contacting us!</p>}
    </form>
  );
};

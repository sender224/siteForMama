import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await onSave(name, phone, message);
   try {
      const res = await fetch('http://13.53.200.62:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResponse(data.message || 'OK');
      setFormData({ name: '', phone: '', message: '' });

    } catch (err) {
      console.error(err);
      setResponse('Помилка при надсиланні');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label>Ім'я:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Номер телефону:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Коментар</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Відправити</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
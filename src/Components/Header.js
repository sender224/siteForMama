import React, { useState } from "react";
import logo from "../Images/logo.png";
import ContactForm from './ContactForm';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const saveContact = async (contactName, contactPhone, contactMessage) => {
   /*) try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          phone: contactPhone,
          message: contactMessage
        }),
      });
      
      const result = await response.json();
      if (response.ok) {
        alert('Дані успішно збережено!');
        setIsModalOpen(false);
      } else {
        alert('Помилка збереження даних.');
      } 
    } catch (error) {
      console.error('Помилка:', error);
      alert('Сталася помилка.');
    } */
  fetch('https://site-for-mama.vercel.app/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
     name: contactName,
     phone: contactPhone,
     message: contactMessage
  }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  };

  return (
    <header className="container">
      <div>
        <img src={logo} width="256" height="256" alt="Site Logo" />
      </div>
      <div className="flex">
        <p>Послуги</p>
        <p>Контакти</p>
        <button onClick={() => setIsModalOpen(true)}>Записатись на заняття</button>
        <ContactForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={saveContact}
        />
      </div>
    </header>
  );
};

export default Header;
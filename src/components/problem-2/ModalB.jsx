import React, { useState, useEffect } from 'react';

const ModalB = ({ closeModal }) => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiURL = `https://contact.mediusware.com/api/country-contacts/United%20States`;

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    fetch(`${apiURL}?page=${page + 1}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          setContacts((prevContacts) => [...prevContacts, ...data.results]);
          setPage(page + 1);
        } else {
          console.error('Invalid API response format');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (contacts.length === 0) {
      // Initial load
      loadMore();
    } else {
      // For subsequent loads, observe the last contact in the list
      const lastContact = document.querySelector('.contact-list li:last-child');
      if (lastContact) {
        observer.observe(lastContact);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [contacts]);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className='header'>
          <h2>US Contacts</h2>
          <button className="modal-close" onClick={closeModal}>
            Close
          </button>
        </div>
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id}>
              Phone: {contact.phone}, Country: {contact.country.name}
            </li>
          ))}
        </ul>
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalB;

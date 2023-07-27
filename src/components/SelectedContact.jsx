import { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();
        console.log(data);
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, []);
};

export default SelectedContact;

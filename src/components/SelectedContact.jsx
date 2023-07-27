import { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, [selectedContactId]);

  if (!contact) {
    return <p>...</p>
  };

  return (
    <>
      <h1>{contact.name}</h1>
      <p><strong>Username: </strong>{contact.username}</p>
      <p><strong>Email: </strong>{contact.email}</p>
      <p><strong>Phone: </strong>{contact.phone}</p>
      <p><strong>Website: </strong>{contact.website}</p>
      <p><strong>Company: </strong>{contact.company.name}</p>
      <h2>Address</h2>
      <p><strong>City: </strong>{contact.address.city}</p>
      <p><strong>Street: </strong>{contact.address.street}</p>
      <p><strong>Suite: </strong>{contact.address.suite}</p>
      <p><strong>Zipcode: </strong>{contact.address.zipcode}</p>

      <button onClick={() => {setSelectedContactId(null)}}>Home</button>
    </>
  );
};

export default SelectedContact;

import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? <div>"a short message"</div> : <ContactList setSelectedContactId={setSelectedContactId} />}
    </>
  );
};

export default App;

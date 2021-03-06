import React from 'react';
import './App.scss';
import { useState } from 'react';
import Modal from './components/Modal';

const App = () => {

  const [open, setOpen] = useState(false);

  const OpenModal = () => {
    setOpen(!open);
  }

  return (
    <div className="app">
      <div className={!open ? "main" : "test"}>
        <h2>Click the button to open modal!</h2>
        <button onClick={OpenModal} className="btn">Open</button>
      </div>
      <div className="modal">
        {
          open &&
          <Modal
            close={OpenModal}
          />
        }
      </div>
    </div>
  );
};

export default App;
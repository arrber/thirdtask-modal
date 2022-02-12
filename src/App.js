import React from 'react';
import './App.scss';
import { useState } from 'react';
import Modal from './components/Modal';

const App = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <div className="main">
        <h2>Click the button to open modal!</h2>
        <button onClick={() => {setOpen(true)}} className="btn">Open</button>
      </div>
      <div className="modal">
        {
          open &&
          <Modal/>
        }
      </div>
    </div>
  );
};

export default App;
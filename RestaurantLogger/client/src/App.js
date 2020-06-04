import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <New path="/new" />
        <Update path="/restaurant/:id/edit" />
      </Router>
    </div>
  );
}

export default App;

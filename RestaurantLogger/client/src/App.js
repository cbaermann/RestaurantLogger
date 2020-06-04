import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';
import Landing from './views/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Landing path="/" />
        <Main path="/restaurant"/>
        <New path="/new" />
        <Update path="/restaurant/:id/edit" />
      </Router>
    </div>
  );
}

export default App;

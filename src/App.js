import React from 'react';

import Header from './components/Todo/Header';
import Form from './components/Todo/Form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
    </div>
  );
}

export default App;


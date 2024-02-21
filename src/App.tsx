// import React from 'react';
import { useState } from 'react';
import Login from './components/Login';

export default function App() {
  const [userObj, setUserObj] = useState();

  function getUser() {
    // gauti sita console log be klaidu
    console.log('getUser ivyko');
    // pamiti useri is Login formos ir irasyti ji i userObj

    // kai turim userObj is login, tai neberodom formos rodom kortele
  }

  return (
    <div className='container'>
      <h1 className='display-2'>App</h1>
      <Login onLogin={getUser} />
      <div className='card bg-dark-subtle'>
        <div className='card-body'>
          <h2>Sveiki sugryze</h2>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import { type UserObjType } from './types/types';

export default function App() {
  const [userObj, setUserObj] = useState<UserObjType | null>(null);

  function getUser(obj: UserObjType) {
    // gauti sita console log be klaidu
    console.log('getUser ivyko', obj);
    // pamiti useri is Login formos ir irasyti ji i userObj
    setUserObj(obj);
    // kai turim userObj is login, tai neberodom formos rodom kortele
  }

  return (
    <div className='container'>
      <h1 className='display-2'>App</h1>
      {userObj === null && <Login onLogin={getUser} />}

      {userObj !== null && (
        <div className='card bg-dark-subtle'>
          <div className='card-body'>
            <h2>Sveiki sugryze</h2>
          </div>
        </div>
      )}
    </div>
  );
}

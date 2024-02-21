// import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import { type UserObjType } from './types/types';
import Button from './components/UI/Button';
import Input from './components/UI/Input';

const validPass = '123456';

export default function App() {
  const [userObj, setUserObj] = useState<UserObjType | null>(null);
  const [isError, setIsError] = useState(false);

  function getUser(obj: UserObjType) {
    // gauti sita console log be klaidu
    console.log('getUser ivyko', obj);
    // pamiti useri is Login formos ir irasyti ji i userObj

    // pries setinant useri patikrinti ar slaptazodis yra toks kaip validPass
    if (obj.password === validPass) {
      setUserObj(obj);
      setIsError(false);
    } else {
      console.log('neteisingas slaptaz');
      setIsError(true);
    }

    // jei nera tai norim pranesti apie klaida
    // setUserObj(obj);
    // kai turim userObj is login, tai neberodom formos rodom kortele
  }

  return (
    <div className='container'>
      <h1 className='display-2'>App</h1>
      <Button submit>Test btn</Button>
      {isError && <div className='alert alert-danger'>Neteisingas email arba slaptazodis</div>}
      {userObj === null && <Login onLogin={getUser} />}

      {/* rodyti sita kai neteisingas slaptazodis */}

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

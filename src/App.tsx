// import React from 'react';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import { type UserObjType } from './types/types';
import Button from './components/UI/Button';
import PostsList from './components/posts/PostsList';
import SinglePostPage from './components/posts/SinglePostPage';
import HomePage from './pages/HomePage';

const validPass = '123456';

export default function App() {
  const [userObj, setUserObj] = useState<UserObjType | null>(null);
  const [isError, setIsError] = useState('');

  function getUser(obj: UserObjType) {
    // gauti sita console log be klaidu
    console.log('getUser ivyko', obj);
    // pamiti useri is Login formos ir irasyti ji i userObj

    // pries setinant useri patikrinti ar slaptazodis yra toks kaip validPass
    if (obj.password === validPass) {
      setUserObj(obj);
      setIsError('');
    } else {
      console.log('neteisingas slaptaz');
      setIsError('Neteisingas email arba slaptazodis');
    }

    // jei nera tai norim pranesti apie klaida
    // setUserObj(obj);
    // kai turim userObj is login, tai neberodom formos rodom kortele
  }

  return (
    <div className='container'>
      <h1 className='display-2'>App</h1>
      <HomePage />
      <PostsList />
      <SinglePostPage />
      {false && (
        <>
          <Button submit>Test btn</Button>
          {isError && <div className='alert alert-danger'>Neteisingas email arba slaptazodis</div>}
          {userObj === null && <Login onLogin={getUser} error={isError} />}

          {/* rodyti sita kai neteisingas slaptazodis */}

          {userObj !== null && (
            <div className='card bg-dark-subtle'>
              <div className='card-body'>
                <h2>Sveiki sugryze</h2>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

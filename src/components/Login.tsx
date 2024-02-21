import { useState } from 'react';
import { type UserObjType } from '../types/types';
import Button from './UI/Button';
import Input from './UI/Input';

type LoginProps = {
  onLogin: (a: UserObjType) => void;
};
//
export default function Login(props: LoginProps) {
  const [emailVal, setEmailVal] = useState('');
  const [passVal, setPassVal] = useState('');

  function enterEmailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('event.target.value ===', event.target.value);
    setEmailVal(event.target.value);
  }

  const ennterPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassVal(e.target.value);
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // sustabdyti forma nuo psl perkrovimo
    event.preventDefault();
    // atspausdinti user objekta {email: '', password: ''}
    const userObj: UserObjType = {
      email: emailVal,
      password: passVal,
    };
    console.log('userObj ===', userObj);
    props.onLogin(userObj);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <p>Email: {emailVal}</p>
        <p>Pass: {passVal}</p>
      </div>
      <form onSubmit={submitFormHandler} noValidate>
        {/* email input */}
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            value={emailVal}
            onChange={enterEmailHandler}
            type='email'
            className='form-control'
            id='email'
          />
        </div>
        {/* pass input */}
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            value={passVal}
            onChange={ennterPasswordHandler}
            type='password'
            className='form-control'
            id='password'
          />
        </div>
        <div className='mb-3'>
          {/* prideti type ir id propsus */}
          <Input value={passVal} onChange={ennterPasswordHandler} />
        </div>

        <Button submit>Submit</Button>
      </form>
    </div>
  );
}

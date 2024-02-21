import { useState } from 'react';

//
export default function Login() {
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
    const userObj = {
      email: emailVal,
      password: passVal,
    };
    console.log('userObj ===', userObj);
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

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

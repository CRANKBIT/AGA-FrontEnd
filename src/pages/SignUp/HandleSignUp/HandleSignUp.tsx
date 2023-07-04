import React, { useState, FC } from 'react';
import axios from '@/utils/axios';
import TwoPopup from '@/pages/SignUp/HandleSignUp/TwoPopup';
// import SuccessPopup from '@/pages/SignUp/SuccessPopup/SuccessPopup';

interface Error {
  msg: string
}
const HandleSignUp: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string|null>(null);
  const [successMsg, setSuccessMsg] = useState<string|null>(null)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/auth/register', {
        name,
        email,
        password
      });
      setSuccessMsg('Sign up successfully')
    } catch (error:unknown) {
      const err = (error as { response?: { data: Error } }).response?.data;
      setErrorMsg(err?.msg ||'An error occurred');
    }
  };
  const handleClosePopup = ():void => {
    setErrorMsg('');
    setSuccessMsg('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {errorMsg && <TwoPopup message={errorMsg} onClose={handleClosePopup} type='error'/>}
      {successMsg &&<TwoPopup message={successMsg} onClose={handleClosePopup} type='success'/>}
    </div>
  );
};
export default HandleSignUp;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { validateEmail } from '../../utils/helper';

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

      let profileImageUrl = "";

    if(!username){
      setError("Please enter a username.");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter the password");
      return;
    }

    setError('');

    
    try{

    } catch(error) {
      if(error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
      else{
        setError("Something went wrong. Please try again.");
      }
    }

  };

  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Please enter your details to create an account.
      </p>

      <form onSubmit={handleSubmit}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
          <Input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            label='Username'
            placeholder='Enter your username'
            type='text'
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label='Email Address'
            placeholder='jagrati@singh.com'
            type='email'
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label='Password'
            placeholder='Min 8 Characters'
            type='password'
          />
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
          <button type='submit' className='btn-primary'>
            SIGN UP
          </button>
        </div>
      </form>

      <p className='text-[13px] text-slate-800 mt-3'>
        Already have an account?{" "}
        <button
          className='font-medium text-primary underline cursor-pointer'
          onClick={() => setCurrentPage('login')}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUp;

import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const myProfile: React.FC = () => (
  <div className="container w-96 mx-auto px-4">
    <div style={
      {
        display: 'flex', justifyContent: 'flex-end'
      }
    }
    >
      <IconButton aria-label="Close" color="inherit">
        <CloseIcon />
      </IconButton>
    </div>

    <h1 className="font-bold mb-5 text-2xl font-inter">
      My Profile
    </h1>

    <div className="w-full mb-4">
      <label htmlFor="full-name" className="mb-1 text-xl font-medium font-inter">
        Full Name
      </label>
      <br />
      <input
        type="text"
        id="full-name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="John Doe"
        required
      />
    </div>

    <div className="w-full mb-4">
      <label htmlFor="email" className="mt-1 mb-1 text-xl font-medium font-inter">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="john.doe@website.com"
        required
      />
    </div>

    <div className="my-1">
      <a href="." className="text-lg border-b border-sky-600 text-sky-600">Change Password</a>
    </div>

    <Button
      variant="contained"
      sx={
      {
        marginBottom: 3, marginTop: 3
      }
    }
      fullWidth
    >
      Update Changes
    </Button>
    <hr className="border-gray-400 border-t-2" />
    <Button
      variant="outlined"
      sx={
      {
        marginTop: 3
      }
    }
      fullWidth
    >
      Logout
    </Button>

    <div className="my-2 text-center">
      <a href="." className="text-lg border-b border-red-400 text-red-400">Request to Close Account</a>
    </div>
  </div>
);
export default myProfile;

import React from 'react';
import FieldSet from './FieldSet';

const MyForm: React.FC = () => (
  <div className="w-full">
    <FieldSet
      label="Email"
      htmlFor="email"
      type="email"
      id="email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="john.doe@website.com"
    />
    <FieldSet
      label="Mobile"
      htmlFor="mobile"
      type="text"
      id="mobile"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your mobile number"
    />
  </div>
);

export default MyForm;

import React from 'react';

interface UserProps {
  name: string;
  age?: number; // age is optional, will use default if not provided
}

const User: React.FC<UserProps> = ({ name, age = 20 }) => {
  return (
    <div data-testid="user-component">
      <h2>User: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default User;

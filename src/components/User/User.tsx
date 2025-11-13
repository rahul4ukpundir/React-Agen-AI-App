import React from 'react';

interface UserProps {
  name: string;
  email: string;
  profilePicture?: string;
  role?: string;
}

const DEFAULT_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

const User: React.FC<UserProps> = ({ name, email, profilePicture, role }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={profilePicture || DEFAULT_AVATAR}
        alt={`${name}'s profile`}
        className="w-12 h-12 rounded-full object-cover bg-gray-200 flex-shrink-0"
      />
      <div className="flex-grow">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{email}</p>
        {role && <p className="text-xs text-gray-500 mt-1">Role: {role}</p>}
      </div>
    </div>
  );
};

export default User;

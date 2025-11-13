import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

const DEFAULT_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

describe('User Component', () => {
  const userProps = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    role: 'Admin',
  };

  it('renders user details correctly with complete data', () => {
    render(<User {...userProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Role: Admin')).toBeInTheDocument();

    const profileImage = screen.getByAltText("John Doe's profile") as HTMLImageElement;
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toBe(userProps.profilePicture);
  });

  it('renders user details correctly with missing profile picture', () => {
    const { profilePicture, ...propsWithoutPic } = userProps;
    render(<User {...propsWithoutPic} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Role: Admin')).toBeInTheDocument();

    const profileImage = screen.getByAltText("John Doe's profile") as HTMLImageElement;
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toBe(DEFAULT_AVATAR);
  });

  it('renders user details correctly with only required data (name, email)', () => {
    const { profilePicture, role, ...requiredProps } = userProps;
    render(<User {...requiredProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.queryByText('Role: Admin')).not.toBeInTheDocument();

    const profileImage = screen.getByAltText("John Doe's profile") as HTMLImageElement;
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toBe(DEFAULT_AVATAR);
  });
});

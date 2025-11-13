import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

describe('User Component', () => {
  test('renders user name and default age when age is not provided', () => {
    render(<User name="John Doe" />);
    expect(screen.getByText(/User: John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Age: 20/i)).toBeInTheDocument();
  });

  test('renders user name and provided age', () => {
    render(<User name="Jane Smith" age={30} />);
    expect(screen.getByText(/User: Jane Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Age: 30/i)).toBeInTheDocument();
  });

  test('age property is modifiable', () => {
    const { rerender } = render(<User name="Alice" age={25} />);
    expect(screen.getByText(/Age: 25/i)).toBeInTheDocument();

    rerender(<User name="Alice" age={40} />);
    expect(screen.getByText(/Age: 40/i)).toBeInTheDocument();
    expect(screen.queryByText(/Age: 25/i)).not.toBeInTheDocument();
  });
});

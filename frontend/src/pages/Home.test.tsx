import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home Page', () => {
  test('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i);
  });

  test('renders main content section', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
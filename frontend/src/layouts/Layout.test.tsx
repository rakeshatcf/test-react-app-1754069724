import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  test('renders header and footer', () => {
    renderWithRouter(<Layout><div>Test Content</div></Layout>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders children content', () => {
    renderWithRouter(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    );
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });
});
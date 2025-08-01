import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders header and footer', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(<Layout><div data-testid="child">Child Content</div></Layout>);
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
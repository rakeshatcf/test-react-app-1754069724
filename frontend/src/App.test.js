import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app layout', () => {
  render(<App />);
  const layoutElement = screen.getByTestId('layout');
  expect(layoutElement).toBeInTheDocument();
});
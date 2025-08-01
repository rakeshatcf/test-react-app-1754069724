import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders app layout', () => {
    const layoutElement = screen.getByTestId('layout');
    expect(layoutElement).toBeInTheDocument();
  });

  test('navigates between pages', async () => {
    const user = userEvent.setup();
    const homeLink = screen.getByRole('link', { name: /home/i });
    await user.click(homeLink);
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });

  test('displays error boundary for runtime errors', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    // Trigger error condition
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    consoleSpy.mockRestore();
  });
});
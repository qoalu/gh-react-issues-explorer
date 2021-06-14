import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app screen', () => {
  render(<App />);
  const welcomeText = screen.getByText(/issues browser/i);
  expect(welcomeText).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Issues from './Issues';

test('renders learn react link', () => {
  render(<Issues list={['1, 2, 3']} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

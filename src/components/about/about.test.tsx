import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './about';

test('renders title', () => {
  render(<About />);
  const titleElement = screen.getByText(/New app/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders home link', () => {
  render(<About />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

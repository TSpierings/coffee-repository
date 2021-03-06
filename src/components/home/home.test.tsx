import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

test('renders title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/New app/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders home link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

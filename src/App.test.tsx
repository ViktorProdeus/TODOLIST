import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('first button name increase', () => {
  const { getByText } = render(<App />);
  const buttonName = getByText(/inc/i);
  expect(buttonName).toBeInTheDocument();
});

test('second button name reset', () => {
  const { getByText } = render(<App />);
  const buttonName = getByText(/reset/i);
  expect(buttonName).toBeInTheDocument();
});

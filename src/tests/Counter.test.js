import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '/Users/yunuskazimli/Downloads/counter-assignment/src/components/Counter.js';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterHeading = screen.getByText(/counter/i);
  expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('-1');
});

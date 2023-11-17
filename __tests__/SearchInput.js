import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  let mockTextChange;

  beforeEach(() => {
    mockTextChange = jest.fn();
  });

  test('renders without crashing', () => {
    const { getByTestId } = render(<SearchInput />);
    expect(getByTestId('search-input')).toBeDefined();
  });

  test('calls the textChange prop when text is entered', () => {
    const { getByTestId } = render(<SearchInput textChange={mockTextChange} />);
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(mockTextChange).toHaveBeenCalledTimes(1);
    expect(mockTextChange).toHaveBeenCalledWith('Hello');
  });

  test('does not call the textChange prop when it is not provided', () => {
    const { getByTestId } = render(<SearchInput />);
    const input = getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(mockTextChange).toHaveBeenCalledTimes(0);
  });
});

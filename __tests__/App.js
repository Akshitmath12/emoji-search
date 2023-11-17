import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import filterEmoji from './filterEmoji';

jest.mock('./filterEmoji');

describe('App', () => {
  beforeEach(() => {
    filterEmoji.mockClear();
  });

  test('renders Header, SearchInput, EmojiResults', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('emoji-results')).toBeInTheDocument();
  });

  test('calls filterEmoji on initial render', () => {
    render(<App />);
    expect(filterEmoji).toHaveBeenCalledTimes(1);
  });

  test('calls filterEmoji with empty string and 20 on initial render', () => {
    render(<App />);
    expect(filterEmoji).toHaveBeenCalledWith("", 20);
  });

  test('calls filterEmoji with entered value when search input changes', () => {
    const { getByTestId } = render(<App />);
    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(filterEmoji).toHaveBeenCalledWith('test', 20);
  });
});

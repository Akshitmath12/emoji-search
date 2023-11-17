import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('renders with correct text', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Emoji Search')).toBeInTheDocument();
  });

  test('renders with correct images', () => {
    const { getAllByRole } = render(<Header />);
    const images = getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '//cdn.jsdelivr.net/emojione/assets/png/1f638.png');
    expect(images[1]).toHaveAttribute('src', '//cdn.jsdelivr.net/emojione/assets/png/1f63a.png');
  });
});

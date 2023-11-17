import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EmojiResultsRow from './EmojiResultsRow';

afterEach(cleanup);

describe('EmojiResultsRow', () => {
  test('renders with default props', () => {
    const { getByTestId, getByText } = render(<EmojiResultsRow />);
    expect(getByTestId('component-emoji-result-row')).toBeInTheDocument();
    expect(getByText('Click to copy emoji')).toBeInTheDocument();
  });

  test('renders with passed props', () => {
    const { getByTestId, getByText, getByAltText } = render(
      <EmojiResultsRow title="smile" symbol="😊" />
    );
    expect(getByTestId('component-emoji-result-row')).toHaveAttribute('data-clipboard-text', '😊');
    expect(getByAltText('smile')).toBeInTheDocument();
    expect(getByText('smile')).toBeInTheDocument();
    expect(getByText('Click to copy emoji')).toBeInTheDocument();
  });

  test('renders correct image source with passed symbol', () => {
    const { getByAltText } = render(<EmojiResultsRow symbol="😊" />);
    const img = getByAltText('');
    expect(img.src).toContain('1f60a.png'); // 1f60a is the unicode for 😊
  });
});

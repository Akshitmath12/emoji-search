import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EmojiResults from './EmojiResults';

afterEach(cleanup);

describe('EmojiResults component', () => {
  let emojiDataMock;

  beforeAll(() => {
    emojiDataMock = [
      { title: 'Grinning', symbol: '😀' },
      { title: 'Grin', symbol: '😁' },
      { title: 'Tears of Joy', symbol: '😂' }
    ];
  });

  test('renders without crashing', () => {
    render(<EmojiResults emojiData={emojiDataMock} />);
  });

  test('renders correct number of emoji rows', () => {
    const { getAllByTestId } = render(<EmojiResults emojiData={emojiDataMock} />);
    const emojiRows = getAllByTestId('emoji-row');
    expect(emojiRows.length).toBe(emojiDataMock.length);
  });

  test('renders correct emoji symbol and title', () => {
    const { getByText } = render(<EmojiResults emojiData={emojiDataMock} />);
    emojiDataMock.forEach(emoji => {
      expect(getByText(emoji.symbol)).toBeInTheDocument();
      expect(getByText(emoji.title)).toBeInTheDocument();
    });
  });
});

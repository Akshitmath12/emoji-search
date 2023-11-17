import filterEmoji from './filterEmoji';
import emojiList from './emojiList.json';

describe('Emoji Filter', () => {
  let originalEmojiList;

  beforeEach(() => {
    originalEmojiList = [...emojiList]; // Clone the original list before each test
  });

  it('returns an empty array when the search text is empty', () => {
    const result = filterEmoji('', 10);
    expect(result).toEqual([]);
  });

  it('returns an array of emojis filtered by title', () => {
    const result = filterEmoji('happy', 10);
    const happyEmojis = originalEmojiList.filter(emoji => emoji.title.toLowerCase().includes('happy'));
    expect(result).toEqual(happyEmojis.slice(0, 10));
  });

  it('returns an array of emojis filtered by keywords', () => {
    const result = filterEmoji('flag', 10);
    const flagEmojis = originalEmojiList.filter(emoji => emoji.keywords.includes('flag'));
    expect(result).toEqual(flagEmojis.slice(0, 10));
  });

  it('returns an array of emojis limited by maxResults', () => {
    const result = filterEmoji('a', 3);
    const aEmojis = originalEmojiList.filter(emoji => emoji.title.toLowerCase().includes('a') || emoji.keywords.includes('a'));
    expect(result.length).toEqual(3);
    expect(result).toEqual(aEmojis.slice(0, 3));
  });
});

import Translate from '../../locale';

const amharic = new Translate('AM').translate;
const english = new Translate('EN').translate;
const gibberish = new Translate('QQ').translate;
const none = new Translate().translate;

test('amharic translation', () => {
  expect(amharic('TEST')).toBe('ፈጣን ቡናማ ቀበሮ በማይረባ ውሻ ላይ ዘለለ።');
});

test('english translation', () => {
  expect(english('TEST')).toBe('The quick brown fox jump over the lazy dog.');
});

test('gibberish translation, defaults to English', () => {
  expect(gibberish('TEST')).toBe('The quick brown fox jump over the lazy dog.');
});

test('language none, defaults to english', () => {
  expect(none('TEST')).toBe('The quick brown fox jump over the lazy dog.');
});

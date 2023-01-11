const leftJoin = require('./left-join'); // import the leftJoin function

describe('leftJoin', () => {
  test('returns an array of arrays with correct key-value pairs', () => {
    let leftMap = {
      diligent: 'employed',
      fond: 'enamored',
      guide: 'usher',
      outfit: 'garb',
      wrath: 'anger',
    };
    let rightMap = {
      diligent: 'idle',
      fond: 'averse',
      guide: 'follow',
      flow: 'jam',
      wrath: 'delight',
    };
    expect(leftJoin(leftMap, rightMap)).toEqual([
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight'],
    ]);
  });

  test('handles empty input', () => {
    expect(leftJoin({}, {})).toEqual([]);
  });
});

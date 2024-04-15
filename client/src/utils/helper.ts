import type { Movie, Show, ShowSeason } from '../utils/types';

type ArrayData = ReturnType<typeof createMoviesInfoList>;
type Data = ArrayData[0];

const isCharUpper = function (ch: number) {
  return ch >= 65 && ch <= 90;
};

const splitStringsWords = function (string: string) {
  const newString = string
    .split('')
    .map((ch) => {
      const code = ch.charCodeAt(0);
      return isCharUpper(code) ? ` ${ch}` : ch;
    })
    .join('')
    .replace('Of', 'of');

  return newString[0].toUpperCase() + newString.slice(1);
};

export const createMoviesInfoList = function (item: Movie | Show | ShowSeason) {
  // prettier-ignore
  const exception = [
    'id', 'title', 'overview', 'backdropPath', 'posterPath', 'cast', 'videoKey', 'collection', 'seasons', 'episodes', 'seasonTitle', 'showId', 'seasonId'

  ];

  const keys = Object.keys(item) as Array<keyof typeof item>;

  return keys
    .filter((key) => !exception.find((el) => el === key))
    .map((key) => ({ key: splitStringsWords(key), data: item[key] }))
    .filter((el) => el.data !== undefined);
};

export const createRenderedValue = function (data: Data) {
  const { data: value, key: title } = data;

  let renderedValue;

  if (value === null) return 'ND';
  else if (typeof value === 'number') {
    if (value === 0) renderedValue = 'ND';
    else if (title === 'Runtime') renderedValue = value + 'min';
    else if (title === 'Budget' || title === 'Revenue')
      renderedValue = new Intl.NumberFormat('us', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    else renderedValue = value;
  } else if (typeof value === 'string') {
    if (!value) renderedValue = 'ND';
    else renderedValue = value;
  } else {
    if (value.length === 0) renderedValue = 'ND';
    else renderedValue = value.join(', ');
  }

  return renderedValue;
};

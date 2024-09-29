import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSearchTabs() {
  const [searchParams] = useSearchParams();
  const [leftPosition, setLeftPosition] = useState<string>();

  const page = searchParams.get('page');
  const type = searchParams.get('type');
  if (page) searchParams.set('page', '1');

  const params = searchParams
    .toString()
    .split('&')
    .filter((param) => !param.includes('type'))
    .join('&');

  useEffect(() => {
    if (!type) setLeftPosition('before:left-0');
    if (type === 'movies') setLeftPosition('before:left-1/4');
    if (type === 'shows') setLeftPosition('before:left-2/4');
    if (type === 'actors') setLeftPosition('before:left-3/4');
  }, [type]);

  return { params, type, leftPosition };
}

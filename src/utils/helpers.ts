import {PhoneType} from '../types/phone';

export const toSortData = (
  phonesFromServer: PhoneType[],
  sort: string | unknown
) => {
  if (sort === 'newest') {
    phonesFromServer = phonesFromServer.sort((a, b) => b.year - a.year);
  }
  if (sort === 'oldest') {
    phonesFromServer = phonesFromServer.sort((a, b) => a.year - b.year);
  }
  if (sort === 'alphabetically') {
    phonesFromServer = phonesFromServer.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sort === 'moreExpensive') {
    phonesFromServer = phonesFromServer.sort(
      (a, b) => b.fullPrice - a.fullPrice
    );
  }

  if (sort === 'cheapest') {
    phonesFromServer = phonesFromServer.sort(
      (a, b) => a.fullPrice - b.fullPrice
    );
  }

  return phonesFromServer;
};

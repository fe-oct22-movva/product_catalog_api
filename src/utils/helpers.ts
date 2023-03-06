import {PhoneType} from '../types/phone';

export const toSortData = (
  phonesFromServer: PhoneType[],
  sort: string | unknown
) => {
  if (sort === 'fromNewest') {
    phonesFromServer = phonesFromServer.sort((a, b) => b.year - a.year);
  }
  if (sort === 'fromOldest') {
    phonesFromServer = phonesFromServer.sort((a, b) => a.year - b.year);
  }
  if (sort === 'Alphabetically') {
    phonesFromServer = phonesFromServer.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sort === 'fromHighPrice') {
    phonesFromServer = phonesFromServer.sort(
      (a, b) => b.fullPrice - a.fullPrice
    );
  }

  if (sort === 'fromLowPrice') {
    phonesFromServer = phonesFromServer.sort(
      (a, b) => a.fullPrice - b.fullPrice
    );
  }

  return phonesFromServer;
};

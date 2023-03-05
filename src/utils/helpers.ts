import {PhoneType} from '../types/phone';

export const toSortData = (
  phonesFromServer: PhoneType[],
  sortBy: string | unknown
) => {
  if (sortBy === 'fromNewest') {
    phonesFromServer = phonesFromServer.sort((a, b) => b.year - a.year);
  }
  if (sortBy === 'fromOldest') {
    phonesFromServer = phonesFromServer.sort((a, b) => a.year - b.year);
  }
  if (sortBy === 'Alphabetically') {
    phonesFromServer = phonesFromServer.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === 'fromHighPrice') {
    phonesFromServer = phonesFromServer.sort(
      (a, b) => b.fullPrice - a.fullPrice
    );
  }

  if (sortBy === 'fromLowPrice') {
    phonesFromServer = phonesFromServer.sort(
      (a, b) => a.fullPrice - b.fullPrice
    );
  }

  return phonesFromServer;
};

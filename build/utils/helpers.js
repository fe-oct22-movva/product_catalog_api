'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.toSortData = void 0;
const toSortData = (phonesFromServer, sort) => {
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
exports.toSortData = toSortData;

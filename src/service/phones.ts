import {Phone} from '../models/phone';
import {PhoneType} from '../server';
import {toSortData} from '../utils/helpers';

export const getAllPhones = async (
  pageQuery: string,
  limitQuery: string,
  sortQuery: string
) => {
  let phones: PhoneType[] = await Phone.findAll();

  const sortBy = (sortQuery as string) || 'fromNewest';

  if (sortBy) {
    phones = toSortData(phones, sortBy);
  }

  const page = parseInt(pageQuery || '1');

  const limit = parseInt(limitQuery || '12');

  const startIndex = (page - 1) * limit;

  const endIndex = page * limit;

  const totalPhones = phones.length;

  const totalPages = Math.ceil(totalPhones / limit);

  const prevPage = {
    page: page - 1,
    limit: limit,
  };

  const nextPage = {
    page: page + 1,
    limit: limit,
  };

  const result = {
    totalPhones: totalPhones,
    pages: totalPages,
    prev: prevPage,
    next: nextPage,
    result: phones.slice(startIndex, endIndex),
  };

  return result;
};

export const getOnePhone = async (phoneId: string) => {
  return Phone.findByPk(phoneId);
};

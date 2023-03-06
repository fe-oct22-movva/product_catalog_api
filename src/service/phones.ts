import {Phone} from '../models/phone';
import {PhoneType} from '../types/phone';
import {toSortData} from '../utils/helpers';
import {PhoneDetail} from '../models/phoneDetail';

export const getAllPhones = async (
  pageQuery: string,
  limitQuery: string,
  sortQuery: string
) => {
  let phones: PhoneType[] = await Phone.findAll();

  const sort = (sortQuery as string) || 'newest';

  if (sort) {
    phones = toSortData(phones, sort);
  }

  const page = parseInt(pageQuery || '1');

  const limit = parseInt(limitQuery || phones.length.toString());

  console.log(limit);

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
  return await PhoneDetail.findByPk(phoneId);
};

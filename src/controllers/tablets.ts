import { Request, Response } from 'express';
import { getAllTablets } from '../service/tablets';

export const getTablets = async (req: Request, res: Response) => {
  const tabletsFromServer = await getAllTablets();

  console.log('controllers');

  res.send(tabletsFromServer);
};

export const tabletController = {
  getTablets,
};

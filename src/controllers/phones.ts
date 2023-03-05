import { Request, Response } from 'express';
import { getAllPhones, getOnePhone } from '../service/phones';

export const getPhones = async (req: Request, res: Response) => {
  const phonesFromServer = await getAllPhones(req.query.page as string, req.query.limit as string, req.query.sortBy as string);

  res.send(phonesFromServer);
};

export const getOne = async(req: Request, res: Response) => {
  const {phoneId} = req.params;

  const foundPhone = await getOnePhone(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);
  }

  res.send(foundPhone);
};

export const phoneController = {
  getPhones,
  getOne,
};

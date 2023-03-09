import { TabletType } from './../types/tablets';
import { Tablet } from '../models/tablets';

export const getAllTablets = async () => {
  const tablets: TabletType[] = await Tablet.findAll();

  return tablets;
};
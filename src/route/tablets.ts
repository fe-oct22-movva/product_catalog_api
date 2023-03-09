import { Router } from 'express';

import { tabletController } from '../controllers/tablets';

export const tabletRouter = Router();

tabletRouter.get('/', tabletController.getTablets);

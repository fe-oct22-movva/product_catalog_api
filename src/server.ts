import cors from 'cors';
import express from 'express';
import { phoneRouter } from './route/phones';
import { tabletRouter } from './route/tablets';
import {dbInit} from './utils/dbInit';

dbInit();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/tablets', express.json(), tabletRouter);
app.use('/phones', express.json(), phoneRouter);

console.log('check');

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});

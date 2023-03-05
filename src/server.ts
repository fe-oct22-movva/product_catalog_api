import cors from 'cors';
import express from 'express';
import {phoneRouter} from './route/phones';
import {dbInit} from './utils/dbInit';

dbInit();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/phones', express.json(), phoneRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});

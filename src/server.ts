import cors from 'cors';
import express from 'express';
import { phoneRouter } from './route/phones';

export interface Phone {
  id: number;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://127.0.0.1:5174',
  credentials: true,
}));
app.use(express.json());
app.use('/phones', phoneRouter);

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});

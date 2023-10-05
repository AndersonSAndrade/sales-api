import 'reflect-metadata';
import express from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import '@shared/typeorm';
import ConsumerError from '@shared/errors/ConsumerError';
import multerConfig from '@config/upload';

const app = express();
const consumerError = new ConsumerError();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(multerConfig.diretory));
app.use(routes);
app.use(errors());

app.use(consumerError.consumer);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🏆`);
});

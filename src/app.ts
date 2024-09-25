import express from 'express';
import { AppDataSource } from './database/data-source';
import userRoutes  from './routes/userRoutes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes)


AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error('Error during Data Source initialization', err);
  });

import express, { Application } from 'express';
import { Request, Response, NextFunction } from 'express';
export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Docker with Typescript running...............');
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use('/err', (req: Request, res: Response) => {
  res.status(500).send('Something broke!');
});

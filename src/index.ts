import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
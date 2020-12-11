import * as express from 'express';
import routes from './routes'

const app = express();

routes(app)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

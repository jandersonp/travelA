import { Router } from 'express';

import travelsRouter from './travels.routes';

const routes = Router();

routes.use('/travels', travelsRouter);

export default routes;

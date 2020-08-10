import { Router } from 'express';

import travelsRouter from './travels.routes';

const routes = Router();

routes.use('/sucess', travelsRouter);

export default routes;

import { Router } from 'express';
import { uuid } from 'uuidv4';

import Travel from '../models/Travel';

const travelsRouter = Router();

const travels: Travel[] = [];

travelsRouter.post('/', (request, response) => {
  const {
    name,
    phone,
    origin,
    destination,
    datefrom,
    dateto,
    travelersnumber,
  } = request.body;

  const travel = {
    id: uuid(),
    name,
    phone,
    origin,
    destination,
    datefrom,
    dateto,
    travelersnumber,
  };

  travels.push(travel);

  return response.json(travel);
});

export default travelsRouter;

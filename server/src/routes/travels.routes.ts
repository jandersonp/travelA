import { Router } from 'express';
import { parseISO } from 'date-fns';

import TravelsRepository from '../repositories/TravelsRepository';
import CreateTravelService from '../services/CreateTravelService';

const travelsRouter = Router();
const travelsRepository = new TravelsRepository();

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

  const dateF = parseISO(datefrom);
  const dateT = parseISO(dateto);

  const createTravel = new CreateTravelService(travelsRepository);

  const travel = createTravel.execute({
    name,
    phone,
    origin,
    destination,
    datefrom: dateF,
    dateto: dateT,
    travelersnumber,
  });

  return response.json(travel);
});

export default travelsRouter;

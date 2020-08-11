import { startOfHour } from 'date-fns';

import Travel from '../models/Travel';
import TravelsRepository from '../repositories/TravelsRepository';

interface Request {
  name: string;
  phone: string;
  origin: string;
  destination: string;
  datefrom: Date;
  dateto: Date;
  travelersnumber: number;
}

class CreateTravelService {
  private travelsRepository: TravelsRepository;

  constructor(travelsRepository: TravelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  public execute({
    name,
    phone,
    origin,
    destination,
    datefrom,
    dateto,
    travelersnumber,
  }: Request): Travel {
    const dateFrom = startOfHour(datefrom);
    const dateTo = startOfHour(dateto);

    const travel = this.travelsRepository.create({
      name,
      phone,
      origin,
      destination,
      datefrom: dateFrom,
      dateto: dateTo,
      travelersnumber,
    });

    return travel;
  }
}

export default CreateTravelService;

import Travel from '../models/Travel';

interface CreateTravelDTO {
  name: string;
  phone: string;
  origin: string;
  destination: string;
  datefrom: Date;
  dateto: Date;
  travelersnumber: number;
}

class TravelsAppointments {
  private travels: Travel[];

  constructor() {
    this.travels = [];
  }

  public create({
    name,
    phone,
    origin,
    destination,
    datefrom,
    dateto,
    travelersnumber,
  }: CreateTravelDTO): Travel {
    const travel = new Travel({
      name,
      phone,
      origin,
      destination,
      datefrom,
      dateto,
      travelersnumber,
    });

    this.travels.push(travel);

    return travel;
  }
}

export default TravelsAppointments;

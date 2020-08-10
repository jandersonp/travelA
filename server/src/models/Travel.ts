import { uuid } from 'uuidv4';

class Travel {
  id: string;

  name: string;

  phone: string;

  origin: string;

  destination: string;

  datefrom: Date;

  dateto: Date;

  travelersnumber: number;

  constructor(
    name: string,
    phone: string,
    origin: string,
    destination: string,
    datefrom: Date,
    dateto: Date,
    travelersnumber: number,
  ) {
    this.id = uuid();
    this.name = name;
    this.phone = phone;
    this.origin = origin;
    this.destination = destination;
    this.datefrom = datefrom;
    this.dateto = dateto;
    this.travelersnumber = travelersnumber;
  }
}

export default Travel;

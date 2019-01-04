
export class Registration {

  id: string;
  company: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  constructor()
  constructor(id?, company?, firstName?, lastName?, address?, city?, state?, postalCode?, country?) {
    this.id = id;
    this.company = company;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
  }
}

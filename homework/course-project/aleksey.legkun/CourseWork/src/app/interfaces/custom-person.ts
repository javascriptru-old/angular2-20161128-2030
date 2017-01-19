import { IPerson } from './person';

 export class CustomPerson implements IPerson {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  birthdate: Date;
  gender: string;
  address: string;
}
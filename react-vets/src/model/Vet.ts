import { Specialty } from './Specialty';

export interface Vet {
  id: string;
  firstName: string;
  lastName: string;
  specialties: Array<Specialty>;
}

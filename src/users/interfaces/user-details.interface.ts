import { Role } from 'src/schemas/role.schema';

export interface UserDetailsInterface {
  id: string;
  username: string;
  email: string;
  roles?: Role[];
  uuid?: string;
  // password: string;
  // status: string;
  // link: string;
  // balance: number;
  // deadline_tariff: number;
}

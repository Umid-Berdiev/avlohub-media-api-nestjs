import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/schemas/role.schema';
// import { Role } from '../enums/role.enum';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
// export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);

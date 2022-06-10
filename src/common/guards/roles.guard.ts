import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private roleService: RolesService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return this.matchRoles(roles, user.roles);
  }

  matchRoles(roles: string[], userRoles: string[]) {
    try {
      return userRoles.some(async (role: string) => {
        const roleObj = await this.roleService.findOne(role);

        return !!roles.find((item) => item === roleObj.slug);
      });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}

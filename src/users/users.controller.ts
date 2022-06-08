import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDetailsInterface } from './interfaces/user-details.interface';
import { UsersService } from './users.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles('admin')
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetailsInterface> {
    return this.usersService.findById(id);
  }

  @Roles('admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Roles('admin')
  @Patch(':id/role')
  updateRole(@Param('id') id: string, @Body('role_id') role_id: string) {
    return this.usersService.updateRole(id, role_id);
  }

  @Roles('admin')
  @Post('tariff')
  buyTariff(@Request() req, @Body('tariff_id') tariff_id: string) {
    return this.usersService.buyTariff(req.user.id, tariff_id);
  }
}

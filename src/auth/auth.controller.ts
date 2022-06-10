import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ExistingUserDto } from 'src/users/dto/existing-user.dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('admin')
  @Post('register')
  register(@Body() user: CreateUserDto): Promise<UserDocument | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() user: ExistingUserDto): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }
}

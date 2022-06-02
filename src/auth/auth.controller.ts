import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ExistingUserDto } from 'src/users/dto/existing-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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

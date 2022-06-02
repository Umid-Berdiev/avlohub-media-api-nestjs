import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import crypto from 'crypto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ExistingUserDto } from 'src/users/dto/existing-user.dto';
import { UserDetailsInterface } from 'src/users/interfaces/user-details.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return hash(password, 12);
  }

  async register(
    user: Readonly<CreateUserDto>,
  ): Promise<UserDetailsInterface | any> {
    const { username, email, password } = user;
    const uuid = crypto.randomUUID();
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) return 'Email has already taken by another user!';

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.create(
      username,
      email,
      hashedPassword,
      uuid,
    );

    return this.userService._getUserDetails(newUser);
  }

  async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDetailsInterface | null> {
    const user = await this.userService.findByEmail(email);
    const doesUserExist = !!user;

    if (!doesUserExist) return null;

    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.password,
    );

    if (!doesPasswordMatch) return null;

    return this.userService._getUserDetails(user);
  }

  async login(
    existingUser: ExistingUserDto,
  ): Promise<{ token: string } | null> {
    const { email, password } = existingUser;
    const user = await this.validateUser(email, password);

    if (!user) return null;

    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }
}

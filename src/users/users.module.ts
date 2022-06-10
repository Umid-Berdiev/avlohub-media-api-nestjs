import { Module } from '@nestjs/common';
import { MongooseModule, Prop } from '@nestjs/mongoose';
import { RolesModule } from 'src/roles/roles.module';
import { UserSchema } from 'src/schemas/user.schema';
import { TariffsModule } from 'src/tariffs/tariffs.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    TariffsModule,
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}

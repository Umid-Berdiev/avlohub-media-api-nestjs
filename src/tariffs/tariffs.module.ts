import { Module } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { TariffsController } from './tariffs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TariffSchema } from 'src/schemas/tariff.schema';

@Module({
  controllers: [TariffsController],
  providers: [TariffsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Tariff', schema: TariffSchema }]),
  ],
  exports: [TariffsService],
})
export class TariffsModule {}

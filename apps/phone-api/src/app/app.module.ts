import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PhoneService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PhoneService],
})
export class AppModule {}

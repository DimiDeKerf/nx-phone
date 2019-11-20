import { Controller, Get } from '@nestjs/common';

import { PhoneService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: PhoneService) {}

  @Get('phones')
  getData() {
    return this.appService.getData();
  }
}

import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { PhoneService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PhoneService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to phone-api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({message: 'Welcome to phone-api!'});
    });
  });
});

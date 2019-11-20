import { Test } from '@nestjs/testing';

import { PhoneService } from './app.service';

describe('AppService', () => {
  let service: PhoneService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PhoneService],
    }).compile();

    service = app.get<PhoneService>(PhoneService);
  });

  describe('getData', () => {
    it('should return "Welcome to phone-api!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to phone-api!'});
    });
  });
});

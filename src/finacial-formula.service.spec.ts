import { Test, TestingModule } from '@nestjs/testing';
import { FinancialService } from './finacial-formula.service';

describe('FinancialService', () => {
  let service: FinancialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialService],
    }).compile();
    service = module.get<FinancialService>(FinancialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate payment correctly', async () => {
    const result = await service.payment(5, 12, 1000);
    expect(result).toBeDefined();
    expect(Number(result)).not.toBeNaN();
  });

  it('should calculate present value correctly', async () => {
    const result = await service.presentValue(5, 12, 100);
    expect(result).toBeDefined();
    expect(Number(result)).not.toBeNaN();
  });
});
import { Module } from '@nestjs/common';
import { FinancialController } from './finacial-formula.controller';
import { FinancialService } from './finacial-formula.service';

@Module({
  imports: [],
  controllers: [FinancialController],
  providers: [FinancialService],
})
export class AppModule {}

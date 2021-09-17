import { Controller, Get, Post, Body } from '@nestjs/common';
import { FinancialService } from './finacial-formula.service';
import { BodyModel } from './financial-formula.model'

@Controller('function')
export class FinancialController {
  constructor(
    protected financialService: FinancialService,

  ) {}
  
  @Post('payment')
  async payment(@Body() request: BodyModel ):Promise<any> {
    return this.financialService.payment(
      request.rate,
      request.periods,
      request.presentValue
    );
  }

  @Post('presentValue')
  async presentValue(@Body() request: BodyModel ):Promise<any> {
    return this.financialService.presentValue(
      request.rate,
      request.periods,
      request.payment
    );
  }

}


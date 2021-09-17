import { Injectable } from '@nestjs/common';
var Finance = require("tvm-financejs");

@Injectable()
export class FinancialService {

  async payment(rate, periods, presentValue):Promise<any> {
    var finance = new Finance();
    return Number(finance.PMT(rate/100 ,periods , presentValue*(-1))).toFixed(2)
  }

  async presentValue(rate, periods, payment ):Promise<any> {
    var finance = new Finance();
    return Number(finance.PV(rate/100, periods, payment*(-1))).toFixed(2)
  }

}

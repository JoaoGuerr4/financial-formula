import { IsNumber } from 'class-validator';

export class BodyModel {

    @IsNumber()
    rate: number
     
    @IsNumber()
    periods: number
    
    @IsNumber()
    presentValue: number

    @IsNumber()
    payment: number

}

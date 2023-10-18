import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService]//step 1:make available powerService for other modules 

})
export class PowerModule { }

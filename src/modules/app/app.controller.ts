import { Controller, Get, Query, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(@Req() req: any, @Body() b: any): string {
    // tslint:disable
    console.log(req); // restify wrapper
    console.log(b); // null

    return this.appService.getHello();
  }
}

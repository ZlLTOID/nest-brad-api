import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/chupacabra')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  findChupacabra(): string {
    return this.appService.findChupacabra();
  }

  @Post('/create')
  createChupacabra(): string {
    return 'El Chupacabra created';
  }
    
  }
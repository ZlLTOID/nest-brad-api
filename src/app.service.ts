import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findChupacabra(): string {
    return 'El Chupacabra';
  }
}

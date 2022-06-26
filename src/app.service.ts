import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("application custom log 00001");
    console.log(`PORT : ${process.env.PORT}`);
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Route, RouteDocument } from './routes/entities/route.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

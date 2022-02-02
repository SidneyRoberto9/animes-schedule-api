import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AnimesModule } from './animes/animes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGO_URL}`),
    AnimesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

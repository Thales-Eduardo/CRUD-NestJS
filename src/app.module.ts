import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    //mongo_db = docker
    MongooseModule.forRoot('mongodb://localhost:27017/crude_nest'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

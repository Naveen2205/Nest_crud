import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './catcher/http-error.filter';
import { LoggingInterceptor } from './catcher/looging-interceptor';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "mysql",
        host: "192.168.3.16",
        port: 3306,
        username: "saravana",
        password: "saravana@123",
        database: "NESTJS_DATABASE_CONNECTION",
        synchronize: true,
        logging: true,
        entities: [Photo]
      }
    ),
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService,
      {
        provide: APP_FILTER,
        useClass: HttpErrorFilter
      },
      {
        provide: APP_INTERCEPTOR,
        useClass : LoggingInterceptor
      }
  ],
})
export class AppModule {}

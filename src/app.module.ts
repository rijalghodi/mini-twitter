import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedsModule } from './feeds/feeds.module';
import fo from '../config/data-source';

@Module({
  imports: [
    // Config migration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [fo],
    }),
    // Database
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('migrationDataSource'),
    }),

    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

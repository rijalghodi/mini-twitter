import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedsModule } from './feeds/feeds.module';
import migrationDataSource from '../config/data-source';

@Module({
  imports: [
    // Config migration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [migrationDataSource],
    }),
    // Database
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),

    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

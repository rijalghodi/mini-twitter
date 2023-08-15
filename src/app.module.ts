import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),

    // Database
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('PG_HOST'),
          port: parseInt(config.get('PG_PORT')),
          username: config.get('PG_USERNAME'),
          password: config.get('PG_PASSWORD'),
          database: config.get('PG_DATABASE'),
          url: config.get('PG_URL'),
          ssl: true,
          autoLoadEntities: true,
          synchronize: true,
          entities: ['dist/**/*.entity.js'],
          /**
           * Also you can import entities here...
           */
          // entities: [User, Report],
        };
      },
    }),

    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { FeedsController } from './controllers/feeds.controller';
import { FeedsService } from './services/feeds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedEntity } from './models/feed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedEntity])],
  controllers: [FeedsController],
  providers: [FeedsService],
})
export class FeedsModule {}

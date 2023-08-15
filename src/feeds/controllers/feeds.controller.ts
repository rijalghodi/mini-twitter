import { Body, Controller, Post } from '@nestjs/common';
import { FeedsService } from '../services/feeds.service';
import { CreateFeedDto } from '../dtos/create-feed.dto';

@Controller('feeds')
export class FeedsController {
  constructor(private feedService: FeedsService) {}
  @Post()
  create(@Body() body: CreateFeedDto) {
    return this.feedService.createFeed(body.post);
  }
}

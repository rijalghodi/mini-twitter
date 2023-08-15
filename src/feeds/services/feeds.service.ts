import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FeedEntity } from '../models/feed.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedsService {
  constructor(
    @InjectRepository(FeedEntity)
    private readonly postRepo: Repository<FeedEntity>,
  ) {}

  createFeed(post: string) {
    return this.postRepo.save({ post });
  }
}

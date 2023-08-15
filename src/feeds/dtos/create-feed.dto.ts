import { IsString } from 'class-validator';

export class CreateFeedDto {
  @IsString()
  post: string;
}

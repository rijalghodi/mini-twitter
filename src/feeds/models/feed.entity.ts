import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed')
export class FeedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'anonymous' })
  account: string;

  @Column({ default: '' })
  post: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

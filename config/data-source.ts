import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

var config: any = {
  type: 'postgres',
  host: `${process.env.PG_HOST}`,
  port: parseInt(process.env.PG_PORT),
  username: `${process.env.PG_USERNAME}`,
  password: `${process.env.PG_PASSWORD}`,
  database: `${process.env.PG_DATABASE}`,
  entities: ['dist/**/*.entity{.ts,.js}'], // Works on migration
  migrations: ['dist/config/migrations/*{.ts,.js}'],
  // entities: [join(__dirname, '**', '*.entity.{js,ts}')], // Usually works on dev
  // migrations: [join(__dirname, 'config', 'migrations', '*.{js,ts}')],
  autoLoadEntities: true, // FIXME: postgres doesnt have autoLoadEntities
  synchronize: false,
};

switch (process.env.NODE_ENV) {
  case 'prod':
    config = {
      ...config,
      url: `${process.env.PG_URL}`, // NOTE: This url is mandatory when use render.com (external link)
      ssl: { rejectUnauthorized: false }, // NOTE: this also mandatory in render.com
    };
    break;
  case 'dev':
    break;
  case 'test':
    break;
  default:
    throw new Error('unknown environment');
}

export default registerAs('db_config', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);

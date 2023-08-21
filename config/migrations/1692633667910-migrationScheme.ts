import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationScheme1692633667910 implements MigrationInterface {
    name = 'MigrationScheme1692633667910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feed" ADD "user" character varying NOT NULL DEFAULT 'anonymous'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feed" DROP COLUMN "user"`);
    }

}

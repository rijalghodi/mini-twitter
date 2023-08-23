import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationScheme1692759810521 implements MigrationInterface {
    name = 'MigrationScheme1692759810521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feed" ("id" SERIAL NOT NULL, "user" character varying NOT NULL DEFAULT 'anonymous', "post" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8a8dfd1ff306ccdf65f0b5d04b2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "feed"`);
    }

}

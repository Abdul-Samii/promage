import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTitleInTask1709813183882 implements MigrationInterface {
    name = 'AddTitleInTask1709813183882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "title" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "title"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Index1726090590865 implements MigrationInterface {
    name = 'Index1726090590865';
    transaction = false;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX CONCURRENTLY "uix_person_firstName_lastName" ON "person" ("firstName", "lastName") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX CONCURRENTLY "public"."uix_person_firstName_lastName"`);
    }

}

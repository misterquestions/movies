import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameMovieColumns1633847197459 implements MigrationInterface {
    name = 'RenameMovieColumns1633847197459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`releaseDate\``);
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`cover\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`release_date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`cover_url\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`cover_url\``);
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`release_date\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`cover\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`releaseDate\` datetime NOT NULL`);
    }

}

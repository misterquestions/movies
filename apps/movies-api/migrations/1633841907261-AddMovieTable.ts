import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMovieTable1633841907261 implements MigrationInterface {
    name = 'AddMovieTable1633841907261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`movie\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`releaseDate\` datetime NOT NULL, \`cover\` varchar(255) NOT NULL, \`rating\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`movie\``);
    }

}

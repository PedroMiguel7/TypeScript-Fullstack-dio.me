import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1711115219017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.createTable(
    //   new Table({
    //     name: "users",
    //     columns: [
    //       {
    //         name: "id",
    //         type: "integer",
    //         isPrimary: true,
    //         isGenerated: true,
    //         generationStrategy: "increment",
    //       },
    //       {
    //         name: "name",
    //         type: "text",
    //       },
    //       {
    //         name: "email",
    //         type: "text",
    //       },
    //       {
    //         name: "password",
    //         type: "text",
    //       },
    //     ],
    //   })
    // );

    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropTable("users");

    await queryRunner.query(`
      DROP TABLE IF EXISTS users
    `);
  }
}

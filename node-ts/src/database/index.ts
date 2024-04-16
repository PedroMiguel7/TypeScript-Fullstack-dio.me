import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/db.sqlite",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/entities/*.ts"],
});

AppDataSource.initialize()
  .then()
  .catch((error) => {
    console.log("Error on database connection: " + error);
  });

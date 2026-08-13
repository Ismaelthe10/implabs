import { runner } from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();

  const defaultMigrationsOptions = {
    dbClient: dbClient,
    migrationsTable: "pgmigrations",
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
  };
  if (request.method === "GET") {
    const pendingMigrations = await runner(defaultMigrationsOptions);
    await dbClient.end();
    response.status(200).json(pendingMigrations);
  }
  if (request.method === "POST") {
    const migratedMigrations = await runner({
      ...defaultMigrationsOptions,
      dryRun: false,
    });

    await dbClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }

    return response.status(200).json(migratedMigrations);
  }

  return response.status(405).end();
  //405 = method not allowed
}

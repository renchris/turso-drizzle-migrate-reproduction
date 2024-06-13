<p align="center">
  <a href="https://github.com/renchris/panda-boilerplate">
    <img alt="Panda Emoji" src="public/panda-emoji.png" width="60" />
  </a>
</p>
<h1 align="center">
  Turso Drizzle Migrate Reproduction
</h1>

A minimal reproduction repository: drizzle migrate completes successfully but does not generate tables or columns in the Turso production database

## 🚀 Usage

First, create your Turso production databases:

Here is an example through the Turso CLI
```bash
turso db create --canary --type schema parent-schema-database
turso db create --canary first-database --schema parent-schema-database
turso db create --canary second-database --schema parent-schema-database
```

Then, write your env variables to your `.env` file
Here is what it should look like. You can generate your actual `TURSO_AUTH_TOKEN` and find your `TURSO_DATABASE_URL` in the Turso CLI
```env
TURSO_DATABASE_URL=libsql://yourDatabaseName-yourOrganizationName.turso.io
TURSO_AUTH_TOKEN=your-generated-turso-auth-token
```

Then, install the dependencies:

```bash
pnpm install
```

Then, generate the migration files:

```bash
pnpm generate
```

Then, run the migration:

```bash
pnpm migrate
```


Open the production database tables, and if successful, see the table columns from the `drizzle/schema.ts` file present


## 🧐 What's inside?

A quick look at the top-level files and directories.

    drizzle
    └── schema.ts
    drizzle.config.ts

1. **`/drizzle/schema`**: This file contains the database table definitions with their fields and data types and constraints.

1. **`drizzle.config.ts`**: This file contains the Drizzle Config to connect to `drizzle-kit` and their functions ie. `generate` and `migrate`.

## 📣 Recognition

Thank you to Turso and Drizzle teams for multi-schema databases and migrations

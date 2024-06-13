import type { Config } from 'drizzle-kit'

export default {
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || 'url not found',
    authToken: process.env.TURSO_AUTH_TOKEN || 'auth token not found',
  },
} satisfies Config

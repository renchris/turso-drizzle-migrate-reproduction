import { type InferSelectModel, type InferInsertModel, relations } from 'drizzle-orm'
import {
  sqliteTable, text, integer,
} from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
  id: integer('id').primaryKey().notNull(),
  email: text('email').unique().notNull(),
  username: text('username').unique().notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
})

export type User = InferSelectModel<typeof user>
export type InsertUser = InferInsertModel<typeof user>

export const invitation = sqliteTable('invitation', {
  id: integer('id').primaryKey().notNull(),
  invitingUserID: integer('inviting_user_id').notNull(),
  email: text('email').unique().notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
})

export type Invitation = InferSelectModel<typeof invitation>
export type InsertInvitation = InferInsertModel<typeof invitation>

export const userRelations = relations(user, ({ one }) => ({
  invitation: one(invitation),
}))

export const invitationRelations = relations(invitation, ({ one }) => ({
  user: one(user, {
    fields: [invitation.invitingUserID],
    references: [user.id],
  }),
}))

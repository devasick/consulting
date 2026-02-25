import { db } from "./db";
import { contactMessages, type CreateContactRequest, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: CreateContactRequest): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: CreateContactRequest): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();

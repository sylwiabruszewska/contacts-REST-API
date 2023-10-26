import path from "path";
import { promises as fs } from "fs";

const contactsPath = path.join(process.cwd(), "db", "contacts.json");

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath, { encoding: "utf-8" });

  if (!data) {
    throw new Error(`Not found`);
  }

  const contacts = JSON.parse(data);
  return contacts;
};

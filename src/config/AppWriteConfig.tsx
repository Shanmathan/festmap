import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c9d2ab4efa3e9f9a66");

export const account = new Account(client);

export const database = new Databases(client);

export const storage = new Storage(client);

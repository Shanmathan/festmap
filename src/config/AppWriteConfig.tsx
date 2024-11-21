import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT as string)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID as string);

export const account = new Account(client);

export const database = new Databases(client);

export const storage = new Storage(client);

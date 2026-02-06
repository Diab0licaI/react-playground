import conf from "../conf/conf.js";
import { Client, Account } from "appwrite";
import { ID } from "appwrite";

export class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );

    return this.login({ email, password });
  }

  async login({ email, password }) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    return await this.account.get();
  }

  async logout() {
    return await this.account.deleteSession("current");
  }
}

const authService = new AuthService();
export default authService;

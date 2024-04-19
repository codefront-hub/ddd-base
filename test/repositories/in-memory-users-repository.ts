import type { UsersRepository } from "../../src/domain/user-manager/application/repositories/user-repositorie";
import type { User } from "../../src/domain/user-manager/enterprise/entities/user";

export class InMemoryUserRepository implements UsersRepository {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }
}

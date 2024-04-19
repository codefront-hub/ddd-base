import { User } from "../../enterprise/entities/user";
import type { UsersRepository } from "../repositories/user-repositorie";

interface CreateUserUseCaseRequest {
  name: string;
}

interface CreateUserUseCaseResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  create({ name }: CreateUserUseCaseRequest): CreateUserUseCaseResponse {
    const user = new User(name);

    this.userRepository.create(user);

    return { user };
  }
}

import { InMemoryUserRepository } from "../../../../../test/repositories/in-memory-users-repository";
import { CreateUserUseCase } from "./register-user";

let inMemoryUserRepository: InMemoryUserRepository;
let sut: CreateUserUseCase;

describe("Create User Use Case", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    sut = new CreateUserUseCase(inMemoryUserRepository);
  });

  it("should be able to create a user", () => {
    const res = sut.create({ name: "John" });

    expect(res.user.getId).toBeDefined();
    expect(res.user.getName).toBe("John");
  });
});

import { InMemoryUsersRepository } from "../../../../../test/repositories/in-memory-delivery-persons-repository";
import { CreateDeliveryPersonUseCase } from "./register-delivery-person";

let inMemoryUserRepository: InMemoryUsersRepository;
let sut: CreateDeliveryPersonUseCase;

describe("Create Delivery Person Use Case", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUsersRepository();
    sut = new CreateDeliveryPersonUseCase(inMemoryUserRepository);
  });

  it("should be able to create a delivery person", () => {
    const res = sut.create({
      name: "John",
      document: "12345678",
      password: "123456",
    });

    expect(res.deliveryPerson.id).toBeDefined();
    expect(res.deliveryPerson.getName).toBe("John");
  });
});

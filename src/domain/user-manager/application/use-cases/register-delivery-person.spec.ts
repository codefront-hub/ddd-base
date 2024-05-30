import { InMemoryDeliveryPersonsRepository } from "../../../../../test/repositories/in-memory-delivery-persons-repository";
import { CreateDeliveryPersonUseCase } from "./register-delivery-person";

let inMemoryDeliveryPersonsRepository: InMemoryDeliveryPersonsRepository;
let sut: CreateDeliveryPersonUseCase;

describe("Create Delivery Person Use Case", () => {
  beforeEach(() => {
    inMemoryDeliveryPersonsRepository = new InMemoryDeliveryPersonsRepository();
    sut = new CreateDeliveryPersonUseCase(inMemoryDeliveryPersonsRepository);
  });

  it("should be able to create a delivery person", () => {
    const result = sut.execute({
      name: "John",
      document: "12345678",
      password: "123456",
    });

    expect(result.deliveryPerson.id).toBeDefined();
    expect(result.deliveryPerson.name).toBe("John");
  });
});

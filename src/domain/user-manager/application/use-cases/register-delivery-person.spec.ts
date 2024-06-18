import { PasswordHash } from "@/core/entities/password-hash";
import { makeDeliveryPerson } from "test/factories/make-delivery-person";
import { InMemoryDeliveryPersonsRepository } from "test/repositories/in-memory-delivery-persons-repository";
import { CreateDeliveryPersonUseCase } from "./register-delivery-person";

let passwordHash: PasswordHash;
let inMemoryDeliveryPersonsRepository: InMemoryDeliveryPersonsRepository;
let sut: CreateDeliveryPersonUseCase;

describe("Create Delivery Person Use Case", () => {
  beforeEach(() => {
    passwordHash = new PasswordHash();
    inMemoryDeliveryPersonsRepository = new InMemoryDeliveryPersonsRepository();
    sut = new CreateDeliveryPersonUseCase(
      passwordHash,
      inMemoryDeliveryPersonsRepository,
    );
  });

  it("should be able to create a delivery person", async () => {
    const fakeDeliveryPerson = makeDeliveryPerson({ name: "John" });
    const result = await sut.execute(fakeDeliveryPerson);

    expect(result.deliveryPerson.id).toBeDefined();
    expect(result.deliveryPerson.name).toBe(fakeDeliveryPerson.name);
  });

  it("should be able hash password upon registration", async () => {
    const fakeDeliveryPersonPassword = "123456";

    const fakeDeliveryPerson = makeDeliveryPerson({
      password: fakeDeliveryPersonPassword,
    });

    const result = await sut.execute(fakeDeliveryPerson);

    const isHashed = await passwordHash.compare(
      fakeDeliveryPersonPassword,
      result.deliveryPerson.password,
    );

    expect(result.deliveryPerson.id).toBeDefined();
    expect(isHashed).toBeTruthy();
  });
});

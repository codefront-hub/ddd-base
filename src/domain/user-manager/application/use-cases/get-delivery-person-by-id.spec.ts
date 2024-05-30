import { InMemoryDeliveryPersonsRepository } from "../../../../../test/repositories/in-memory-delivery-persons-repository";
import { DeliveryPerson } from "../../enterprise/entities/delivery-person";
import { GetDeliveryPersonByIdUseCase } from "./get-delivery-person-by-id";

let inMemoryDeliveryPersonsRepository: InMemoryDeliveryPersonsRepository;
let sut: GetDeliveryPersonByIdUseCase;

describe("Get Delivery Person By ID Use Case", () => {
  beforeEach(() => {
    inMemoryDeliveryPersonsRepository = new InMemoryDeliveryPersonsRepository();
    sut = new GetDeliveryPersonByIdUseCase(inMemoryDeliveryPersonsRepository);
  });

  it("should be able to get a delivery person by id", async () => {
    const deliveryPerson = DeliveryPerson.create({
      name: "John",
      document: "12345678",
      password: "123456",
    });

    const deliveryPersonId = deliveryPerson.id.toString();

    await inMemoryDeliveryPersonsRepository.create(deliveryPerson);

    const result = await sut.execute({ id: deliveryPersonId });

    expect(result.deliveryPerson).toMatchObject(
      expect.objectContaining({
        name: "John",
        document: "12345678",
        password: "123456",
      }),
    );
  });

  it("should not be able to get a delivery person with wrong id", async () => {
    expect(() => {
      return sut.execute({
        id: "wrong-id",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});

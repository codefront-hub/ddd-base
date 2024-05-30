import { InMemoryDeliveryPersonsRepository } from "../../../../../test/repositories/in-memory-delivery-persons-repository";
import { DeliveryPerson } from "../../enterprise/entities/delivery-person";
import { DeleteDeliveryPersonUseCase } from "./delete-delivery-person";

let inMemoryDeliveryPersonsRepository: InMemoryDeliveryPersonsRepository;
let sut: DeleteDeliveryPersonUseCase;

describe("Delete Delivery Person Use Case", () => {
  beforeEach(() => {
    inMemoryDeliveryPersonsRepository = new InMemoryDeliveryPersonsRepository();
    sut = new DeleteDeliveryPersonUseCase(inMemoryDeliveryPersonsRepository);
  });

  it("should be able to delete a delivery person", async () => {
    const deliveryPerson = DeliveryPerson.create({
      name: "John",
      document: "12345678",
      password: "123456",
    });

    const deliveryPersonId = deliveryPerson.id.toString();

    await inMemoryDeliveryPersonsRepository.create(deliveryPerson);

    await sut.execute({ id: deliveryPersonId });

    expect(inMemoryDeliveryPersonsRepository.items).toHaveLength(0);
  });

  it("should not be able to delete a delivery person with wrong id", async () => {
    expect(() => {
      return sut.execute({
        id: "wrong-id",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});

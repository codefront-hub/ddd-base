import { makeDeliveryPerson } from "test/factories/make-delivery-person";
import { InMemoryDeliveryPersonsRepository } from "test/repositories/in-memory-delivery-persons-repository";
import { DeleteDeliveryPersonUseCase } from "./delete-delivery-person";

let inMemoryDeliveryPersonsRepository: InMemoryDeliveryPersonsRepository;
let sut: DeleteDeliveryPersonUseCase;

describe("Delete Delivery Person Use Case", () => {
  beforeEach(() => {
    inMemoryDeliveryPersonsRepository = new InMemoryDeliveryPersonsRepository();
    sut = new DeleteDeliveryPersonUseCase(inMemoryDeliveryPersonsRepository);
  });

  it("should be able to delete a delivery person", async () => {
    const fakeDeliveryPerson = makeDeliveryPerson({});

    const deliveryPersonId = fakeDeliveryPerson.id.toString();

    await inMemoryDeliveryPersonsRepository.create(fakeDeliveryPerson);

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

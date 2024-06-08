import { makeDeliveryPerson } from "test/factories/make-delivery-person";
import { InMemoryDeliveryPersonsRepository } from "test/repositories/in-memory-delivery-persons-repository";
import { GetDeliveryPersonByIdUseCase } from "./get-delivery-person-by-id";

let inMemoryDeliveryPersonsRepository: InMemoryDeliveryPersonsRepository;
let sut: GetDeliveryPersonByIdUseCase;

describe("Get Delivery Person By ID Use Case", () => {
  beforeEach(() => {
    inMemoryDeliveryPersonsRepository = new InMemoryDeliveryPersonsRepository();
    sut = new GetDeliveryPersonByIdUseCase(inMemoryDeliveryPersonsRepository);
  });

  it("should be able to get a delivery person by id", async () => {
    const fakeDeliveryPerson = makeDeliveryPerson({});

    const deliveryPersonId = fakeDeliveryPerson.id.toString();

    await inMemoryDeliveryPersonsRepository.create(fakeDeliveryPerson);

    const result = await sut.execute({ id: deliveryPersonId });

    expect(result.deliveryPerson).toMatchObject(fakeDeliveryPerson);
  });

  it("should not be able to get a delivery person with wrong id", async () => {
    expect(() => {
      return sut.execute({
        id: "wrong-id",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});

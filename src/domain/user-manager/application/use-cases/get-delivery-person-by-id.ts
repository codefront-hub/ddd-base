import type { DeliveryPerson } from "../../enterprise/entities/delivery-person";
import type { DeliveryPersonsRepository } from "../repositories/delivery-persons-repository";

interface GetDeliveryPersonByIdUseCaseRequest {
  id: string;
}

interface GetDeliveryPersonByIdUseCaseResponse {
  deliveryPerson: DeliveryPerson;
}

export class GetDeliveryPersonByIdUseCase {
  constructor(private deliveryPersonRepository: DeliveryPersonsRepository) {}

  async execute({
    id,
  }: GetDeliveryPersonByIdUseCaseRequest): Promise<GetDeliveryPersonByIdUseCaseResponse> {
    const deliveryPerson = await this.deliveryPersonRepository.getById(id);

    if (!deliveryPerson) {
      throw new Error("Resource not Found.");
    }

    return { deliveryPerson };
  }
}

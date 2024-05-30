import type { DeliveryPersonsRepository } from "../repositories/delivery-persons-repository";

interface DeleteDeliveryPersonUseCaseRequest {
  id: string;
}

export class DeleteDeliveryPersonUseCase {
  constructor(private deliveryPersonRepository: DeliveryPersonsRepository) {}

  async execute({ id }: DeleteDeliveryPersonUseCaseRequest) {
    const deliveryPerson = await this.deliveryPersonRepository.getById(id);

    if (!deliveryPerson) {
      throw new Error("Resource not Found.");
    }

    await this.deliveryPersonRepository.delete(id);
  }
}

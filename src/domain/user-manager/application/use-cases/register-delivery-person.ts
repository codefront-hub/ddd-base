import { DeliveryPerson } from "@/domain/user-manager/enterprise/entities/delivery-person";
import type { DeliveryPersonsRepository } from "../repositories/delivery-persons-repository";

interface CreateDeliveryPersonUseCaseRequest {
  name: string;
  document: string;
  password: string;
}

interface CreateDeliveryPersonUseCaseResponse {
  deliveryPerson: DeliveryPerson;
}

export class CreateDeliveryPersonUseCase {
  constructor(private deliveryPersonRepository: DeliveryPersonsRepository) {}

  execute({
    name,
    document,
    password,
  }: CreateDeliveryPersonUseCaseRequest): CreateDeliveryPersonUseCaseResponse {
    const deliveryPerson = DeliveryPerson.create({
      name,
      document,
      password,
    });

    this.deliveryPersonRepository.create(deliveryPerson);

    return { deliveryPerson };
  }
}

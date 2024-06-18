import type { PasswordHash } from "@/core/entities/password-hash";
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
  constructor(
    private passwordHash: PasswordHash,
    private deliveryPersonRepository: DeliveryPersonsRepository,
  ) {}

  async execute({
    name,
    document,
    password,
  }: CreateDeliveryPersonUseCaseRequest): Promise<CreateDeliveryPersonUseCaseResponse> {
    const hashedPassword = await this.passwordHash.hash(password);

    const deliveryPerson = DeliveryPerson.create({
      name,
      document,
      password: hashedPassword,
    });

    this.deliveryPersonRepository.create(deliveryPerson);

    return { deliveryPerson };
  }
}

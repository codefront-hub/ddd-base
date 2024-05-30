import type { DeliveryPersonsRepository } from "@/domain/user-manager/application/repositories/delivery-persons-repository";
import type { DeliveryPerson } from "@/domain/user-manager/enterprise/entities/delivery-person";

export class InMemoryUsersRepository implements DeliveryPersonsRepository {
  private deliveryPerson: DeliveryPerson[] = [];

  async create(deliveryPerson: DeliveryPerson) {
    this.deliveryPerson.push(deliveryPerson);
  }
}

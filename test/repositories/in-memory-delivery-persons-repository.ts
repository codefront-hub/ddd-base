import type { DeliveryPersonsRepository } from "@/domain/user-manager/application/repositories/delivery-persons-repository";
import type { DeliveryPerson } from "@/domain/user-manager/enterprise/entities/delivery-person";

export class InMemoryDeliveryPersonsRepository
  implements DeliveryPersonsRepository
{
  private deliveryPerson: DeliveryPerson[] = [];

  async create(deliveryPerson: DeliveryPerson) {
    this.deliveryPerson.push(deliveryPerson);
  }

  async getById(id: string) {
    const deliveryPerson = this.deliveryPerson.find(
      (item) => item.id.toString() === id,
    );

    if (!deliveryPerson) {
      return null;
    }

    return deliveryPerson;
  }
}

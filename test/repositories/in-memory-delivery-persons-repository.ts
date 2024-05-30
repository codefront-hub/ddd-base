import type { DeliveryPersonsRepository } from "@/domain/user-manager/application/repositories/delivery-persons-repository";
import type { DeliveryPerson } from "@/domain/user-manager/enterprise/entities/delivery-person";

export class InMemoryDeliveryPersonsRepository
  implements DeliveryPersonsRepository
{
  public items: DeliveryPerson[] = [];

  async create(deliveryPerson: DeliveryPerson) {
    this.items.push(deliveryPerson);
  }

  async delete(id: string) {
    const itemToDelete = this.items.findIndex(
      (item) => item.id.toString() === id,
    );

    this.items.splice(itemToDelete, 1);
  }

  async getById(id: string) {
    const deliveryPerson = this.items.find((item) => item.id.toString() === id);

    if (!deliveryPerson) {
      return null;
    }

    return deliveryPerson;
  }
}

import type { DeliveryPerson } from "@/domain/user-manager/enterprise/entities/delivery-person";

export interface DeliveryPersonsRepository {
  create(deliveryPerson: DeliveryPerson): Promise<void>;
  getById(id: string): Promise<DeliveryPerson | null>;
  delete(id: string): Promise<void>;
}

import type { DeliveryPerson } from "@/domain/user-manager/enterprise/entities/delivery-person";

export interface DeliveryPersonsRepository {
  create(deliveryPerson: DeliveryPerson): Promise<void>;
}

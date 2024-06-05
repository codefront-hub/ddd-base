import type { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  DeliveryPerson,
  type DeliveryPersonProps,
} from "@/domain/user-manager/enterprise/entities/delivery-person";
import { faker } from "@faker-js/faker";

export function makeDeliveryPerson(
  override: Partial<DeliveryPersonProps>,
  id?: UniqueEntityID,
): DeliveryPerson {
  const deliveryPerson = DeliveryPerson.create(
    {
      name: faker.person.firstName(),
      document: faker.number.int(11).toString(),
      password: faker.number.int(6).toString(),
      ...override,
    },
    id,
  );

  return deliveryPerson;
}

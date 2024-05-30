import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface DeliveryPersonProps {
  name: string;
  document: string;
  password: string;
}

export class DeliveryPerson extends Entity<DeliveryPersonProps> {
  get name(): string {
    return this.props.name;
  }

  get document(): string {
    return this.props.document;
  }

  get password() {
    return this.props.password;
  }

  static create(props: DeliveryPersonProps, id?: UniqueEntityID) {
    return new DeliveryPerson(props, id);
  }
}

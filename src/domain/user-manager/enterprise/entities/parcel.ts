import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";
import type { Optional } from "@/core/types/optional";

type ParcelStatus = "posted" | "pickedUp" | "delivered" | "returned";

export interface ParcelProps {
  deliveryPersonId?: string;
  recipientId: string;
  status: ParcelStatus;
  postDate: Date;
  pickedUpDate?: Date;
  deliveryDate?: Date;
}

export class Parcel extends Entity<ParcelProps> {
  get deliveryPersonId(): string {
    return this.props.deliveryPersonId ?? "";
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  get status(): ParcelStatus {
    return this.props.status;
  }

  get postDate(): Date {
    return this.props.postDate;
  }

  get pickedUpDate(): Date | undefined {
    return this.props.pickedUpDate;
  }

  get deliveryDate(): Date | undefined {
    return this.props.deliveryDate;
  }

  static create(
    props: Optional<ParcelProps, "postDate" | "status">,
    id?: UniqueEntityID,
  ) {
    return new Parcel(
      {
        ...props,
        status: props.status ?? "posted",
        postDate: props.postDate ?? new Date(),
      },
      id,
    );
  }
}

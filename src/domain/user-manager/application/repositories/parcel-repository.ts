import type {
  Parcel,
  ParcelProps,
} from "@/domain/user-manager/enterprise/entities/parcel";

export interface ParcelRepository {
  create(parcel: ParcelProps): Promise<void>;
  getById(id: string): Promise<Parcel | null>;
  delete(id: string): Promise<void>;
  update(parcel: Partial<Parcel>): Promise<void>;
}

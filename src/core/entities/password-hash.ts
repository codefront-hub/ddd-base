import { compare, hash } from "bcryptjs";

export class PasswordHash {
  private HASH_SALT_LENGTH = 8;

  hash(password: string): Promise<string> {
    return hash(password, this.HASH_SALT_LENGTH);
  }

  compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}

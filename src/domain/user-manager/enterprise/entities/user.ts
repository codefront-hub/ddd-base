import { randomUUID } from "node:crypto";

export class User {
  private id: string;
  protected name: string;

  constructor(name: string) {
    this.id = randomUUID();
    this.name = name;
  }

  get getId(): string {
    return this.id;
  }
  get getName(): string {
    return this.name;
  }
  set setName(value: string) {
    this.name = value;
  }
}

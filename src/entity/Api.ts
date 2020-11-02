import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Api {
  @PrimaryColumn()
  path: string;

  @Column()
  request: string;

  @Column()
  response: string;

  constructor(path: string, request: string, response: string) {
    this.path = path;
    this.request = request;
    this.response = response;
  }
}

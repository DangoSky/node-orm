import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Table {
  @PrimaryColumn()
  name: string;

  @Column()
  fields: string;

  constructor(name: string, fields: string) {
    this.name = name;
    this.fields = fields;
  }
}

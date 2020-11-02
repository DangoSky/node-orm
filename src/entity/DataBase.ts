import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Table {
  @PrimaryColumn()
  name: string;

  @Column()
  fields: string;

  @Column()
  tables: string;

  constructor(name: string, fields: string, tables: string) {
    this.name = name;
    this.fields = fields;
    this.tables = tables;
  }
}

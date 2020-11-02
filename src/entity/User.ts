import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  name: string;

  @Column()
  password: string;

  @Column()
  dbId: string;

  constructor(data) {
    const {
      name = '',
      password = '',
      dbId = ''
    } = data || {};
    this.name = name;
    this.password = password;
    this.dbId = dbId;
  }
}

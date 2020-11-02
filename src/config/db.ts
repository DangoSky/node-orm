import { createConnection } from "typeorm";
import * as Entities from '../entity';

function getAllEntities() {
  return Object.values(Entities);
}

export class DB {
  static async start() {
    
    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "autoApi",
      // synchronize: true,  // 自动创建数据表
      entities: getAllEntities()
    }).then(() => {
      console.log('\x1B[32m%s\x1B[0m', 'Successfully connected to the database');
    }).catch(err => {
      console.log('\x1B[31m%s\x1B[0m', err);
    })
  }
}

import { getManager, QueryRunner, MigrationInterface, Table, AdvancedConsoleLogger } from "typeorm";
import { ApiResponse } from './response';
import * as Entities from '../entity';

// export class addTable implements MigrationInterface {
  
  // async up(queryRunner: QueryRunner): Promise<void> {
  //   const temp = await queryRunner.createTable(
  //     new Table({
  //       name: "tables",
  //       columns: [
  //         {
  //           name: "name",
  //           type: "string",
  //           isPrimary: true
  //         },
  //         {
  //           name: "fields",
  //           type: "string"
  //         }
  //       ]
  //     }),
  //     true
  //   ).then(t => {
  //     console.log(111);
  //     console.log(t);
  //   }).catch(err => {
  //     console.log(222);
  //     console.log(err);
  //   })
  //   console.log(temp);
  // }

  // async down(queryRunner: QueryRunner): Promise<void> {}

  // constructor() {
  //   this.up();
  // }
// }





// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import { User } from "./entity/User";
// import { Grades } from './entity/Grades';
// import { test } from './lib';

// createConnection().then(async connection => {

//   test(connection, { tableName: 'User'});

// }).catch(error => console.log(error));

// function addUser() {
//   const user = new User();
//   user.id = 99;
//   user.firstName = "Timber";
//   user.lastName = "Saw";
//   user.age = 25;
//   return user;
// }

// function addGrades(data) {
//   const grades = new Grades();
//   grades.id = '002';
//   grades.name = 'lxy';
//   grades.grades = 100;
//   grades.isQualified = true;
//   grades.test = data;
//   return grades;
// }

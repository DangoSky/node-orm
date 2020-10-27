import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Grades } from './entity/Grades';
import { test } from './lib';

createConnection().then(async connection => {

  test(connection, { tableName: 'User'});

}).catch(error => console.log(error));

function addUser() {
  const user = new User();
  user.id = 99;
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  return user;
}

function addGrades(data) {
  const grades = new Grades();
  grades.id = '002';
  grades.name = 'lxy';
  grades.grades = 100;
  grades.isQualified = true;
  grades.test = data;
  return grades;
}

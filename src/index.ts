import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Grades } from './entity/Grades';

createConnection().then(async connection => {

  const UserRepository = connection.getRepository('User');
  const GradeRepository = connection.getRepository('Grades');

  // const user = addUser();
  // await UserRepository.save(user);

  // const grades = addGrades(await UserRepository.findOne({id: 5}));
  // await GradeRepository.save(grades);

  // const data = await connection.manager.find(User);
  const userData = await UserRepository.find();
  const gradesData = await GradeRepository.find({relations: ['test']});
  console.log(userData);
  console.log(gradesData);

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

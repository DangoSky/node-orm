// 
export async function test(connection, config) {
  const UserRepository = connection.getRepository(config.tableName);
  const userData = await UserRepository.find();
  console.log(1);
  console.log(userData);
}

interface configType {
  
}

export async function createTable(connection, data) {

}

export async function addData(connection, data) {

}

export async function deleteData(connection, data) {

}

export async function setData(connection, data) {

}

export async function getData(connection, data) {

}

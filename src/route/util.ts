import { getManager } from "typeorm";

// 判断表名是否存在
export function judgeTableExit() {
  const entityManager = getManager();
  const tem = entityManager.queryRunner;
  console.log(tem);
}

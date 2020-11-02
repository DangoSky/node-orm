import { getManager } from "typeorm";
import { ApiResponse } from './response';
import * as Entities from '../entity';
import { judgeTableExit } from './util';

// 创建数据表
export async function addData(ctx, next) {
  const {
    table,
    data
  } = ctx.request.body;
  try {
    console.log(111);
    const res = judgeTableExit();
    console.log(res);
    // TODO: 判断是否已经存在该表
    // const tableRepository = getManager().getRepository(table);
    // const newData = new Entities[table](JSON.parse(data));
    // const res = await tableRepository.save(newData);
    // console.log(res);
    ctx.body = new ApiResponse(1, 'success', 'success-test');
    next();
  } catch(err) {
    console.log(333);
    console.log(err);
    ctx.body = new ApiResponse(0, 'error', JSON.stringify(err));
  }
}

import { TableType } from '../type';

const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new koa();

// 创建数据表
router.post('/table/add', async (ctx, next) => {
  console.log(111);
  const params: TableType = ctx.request.body;
  console.log(JSON.stringify(params));
  return JSON.stringify(params);
});

router.post('/signin', async (ctx, next) => {
  var
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(JSON.stringify(ctx.request.body));
  ctx.response.body = `<h1>signin with name: ${name}, password: ${password}</h1>`;
});




app.use(bodyParser());
app.use(router.routes());

app.listen('8000');
console.log('app started at port 8000...');

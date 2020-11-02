import * as router from './route';
import { DB } from './config/db';

const koa = require('koa');
const Router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new koa();

Router.post('/data/add', router.addData);

app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
})

app.use(bodyParser());
app.use(Router.routes());
DB.start();

app.listen('8000');
console.log('app started at port 8000...');

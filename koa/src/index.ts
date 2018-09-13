import Koa from 'koa';
const app = new Koa();

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  console.log(1);
  await next();
  console.log(4);
  ctx.body = { message: 'hello world' };
});

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  console.log(2);
  await next();
  console.log(3);
});

app.listen(3000, () => {
  console.log('koa start 3000');
});


// context
// request
// response



// app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.body = { message: '你好' };
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });
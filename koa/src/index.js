const Koa = require('koa');
const app = new Koa();
app.context.a = '1231312312';
app.use(async (ctx, next) => {
  
  console.log(ctx.a,11111111)
  console.log(1);
  await next();
  console.log(4);

  if (!ctx.body) {
    ctx.body = { message: '404' };
  } else {
    ctx.body = { message: 'hello world' };
  }
  console.log('---------');
});

app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log(3);
  ctx.body = 111111;
});

app.listen(3000, () => {
  console.log('koa start 3000');
});

// application
// context
// request
// response

// app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
//   const start = Date.now();
//   const ms = Date.now() - start;
//   ctx.body = { message: '你好' };
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

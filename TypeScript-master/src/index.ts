import Koa from 'koa';
const app = new Koa();

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.body = { message: '你好' };
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
//   const start = Date.now();
//   return next().then(() => {
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//   });
// });

app.listen(3000, () => {
  console.log('koa start 3000');
});

import Koa from "koa";

const app = new Koa();

app.use((ctx, netx) => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query; //参数对象
  let req_querystring = request.querystring; //参数字符串
  ctx.body = {
    url,
    req_query,
    req_querystring,
  };
});
app.listen(3000);

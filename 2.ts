import Koa from "koa";
const app = new Koa();
const one = (ctx: unknown, next: () => void) => {
  console.log(">> one");
  next();
  console.log("<< one");
};

const two = (ctx: unknown, next: () => void) => {
  console.log(">> two");
  next();
  console.log("<< two");
};

const three = (ctx: unknown, next: () => void) => {
  console.log(">> three");
  next();
  console.log("<< three");
};

app.use(one);
app.use(two);
app.use(three);
app.listen(3000);

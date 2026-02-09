import { app } from "./app.js";

app.listen(3000, () => {
  console.log(JSON.stringify({ msg: "API running on 3000" }));
});

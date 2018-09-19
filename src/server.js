import express from "express";
import { renderFile } from "ejs";

const app = express();

app.engine("html", renderFile);
app.set("view engine", "html");
app.set("views", "dist");

app.use("/", express.static("dist", { index: false }));

app.get("/*", (req, res) => {
  res.render("./index", { req, res });
});

app.listen(6500, () => {
  console.log(`Listening on: http://${process.env.HOST}:${process.env.PORT}`);
});

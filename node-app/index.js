const express = require("express");
const expressReactViews = require("express-react-views");
const db = require("./db");

const app = express();

app.use("/public", express.static("public"));

app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "js");

app.engine("js", expressReactViews.createEngine());

app.get("/", async (req, res) => {
  const repos = await db.any("SELECT * FROM trending_repos");

  res.render("index", { repos });
});

app.listen(app.get("port"), () => {
  console.log(
    "%s App is running at http://localhost:%d in %s mode",
    "✓",
    app.get("port"),
    app.get("env")
  );
});

module.exports = app;

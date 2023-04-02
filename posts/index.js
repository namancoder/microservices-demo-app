import express from "express";
import randomBytes from "crypto";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes.randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("port on 4000");
});

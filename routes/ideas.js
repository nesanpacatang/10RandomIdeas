const express = require("express");
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Growth is painfull",
    tag: "Ägriculture",
    username: "wonderwoman",
    date: "2017-01-02",
  },
  {
    id: 2,
    text: "Change is painfull",
    tag: "physics",
    username: "ironman",
    date: "2019-01-02",
  },
  {
    id: 3,
    text: "change and growth is painfull",
    tag: "science",
    username: "superman",
    date: "2018-01-02",
  },
];

//get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

//get single ideas
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }
  res.json({ success: true, data: idea });
});

//add an idea
router.post("/", (req, res) => {
  // res.send("Post Success");
  // res.send(req.body.text);
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };
  // console.log(idea);
  ideas.push(idea);
  res.json({ success: true, data: idea });
});

module.exports = router;

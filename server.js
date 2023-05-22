const express = require("express");
const port = 5000;

const app = express();

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const ideas = [
//   {
//     id: 1,
//     text: "Growth is painfull",
//     tag: "Ägriculture",
//     username: "wonderwoman",
//     date: "2017-01-02",
//   },
//   {
//     id: 2,
//     text: "Change is painfull",
//     tag: "physics",
//     username: "ironman",
//     date: "2019-01-02",
//   },
//   {
//     id: 3,
//     text: "change and growth is painfull",
//     tag: "science",
//     username: "superman",
//     date: "2018-01-02",
//   },
// ];

// //route
app.get("/", (req, res) => {
  res.json({
    message:
      "welcome to random ideas API 2023 ft. nesan gwapa sa tropang charat",
  });
});

// //get all ideas
// app.get("/api/ideas", (req, res) => {
//   res.json({ success: true, data: ideas });
// });

// //get single ideas
// app.get("/api/ideas/:id", (req, res) => {
//   const idea = ideas.find((idea) => idea.id === +req.params.id);

//   if (!idea) {
//     return res
//       .status(404)
//       .json({ success: false, error: "Resource not found" });
//   }
//   res.json({ success: true, data: idea });
// });
const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`server is listening in port ${port}`));

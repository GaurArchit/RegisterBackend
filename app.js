import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());
//////
const mongoURI =
  "mongodb+srv://architgaur123:VlPSgHSc6QUaypbp@user.zg97xzj.mongodb.net/";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
////
const userSchema = mongoose.Schema({
  username: String,

  password: String,
});

const User = mongoose.model("user", userSchema);
app.post("/demo", (req, res) => {
  let user = new User();
  user.username = req.body.entername;
  user.password = req.body.enterpassword;
  const doc = user.save();
  console.log(doc);
  console.log(req.body);
  res.send(req.body);
});

app.get("/demo", async (req, res) => {
  const docs = await User.find({});
  console.log(docs);
  res.json(docs);
});

app.listen(3030, () => {
  console.log("server started");
});

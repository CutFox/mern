import express from "express";
import fs from "fs";
import multer from "multer";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

import {
  registerValidation,
  loginValidation,
  postCreateValidation,
} from "./validations.js";

import { handleValidationErrors, checkAuth } from "./utils/index.js";

import { UserController, PostController } from "./controllers/index.js";
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connect"))
  .catch((err) => console.log("DB ERR", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);

app.post("/test", (req, res) => {
  res.json({
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…U4OH0.yqRgZtiCK8hlMg293yKNyEzRL5WAfa1111111111",
    user: {
      id: "8e03bea3-35cc-4924-a8ac-87424c69e519",
      displayName: "wqewqe wqewqe",
      email: "2321dsad@asd.asd",
      password: "1231121212121",
      photoURL: null,
    },
  });
});

app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/tags", PostController.getLastTags);

app.get("/posts", PostController.getAll);
app.get("/posts/tags", PostController.getLastTags);
app.get("/posts/:id", PostController.getOne);
app.post(
  "/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch(
  "/posts/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server OK | PORT: ${process.env.PORT}`);
});

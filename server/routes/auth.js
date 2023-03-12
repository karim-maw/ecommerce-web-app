const express = require("express");
const router = express.Router();
const Cryptojs = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");




router.post("/register", async (req, res) => {
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Cryptojs.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString(),
      });
      const savedUser = await newUser.save();
      console.log(savedUser);
      res.status(200).json(savedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  });


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(401).json("wrong credintials");
    }
    const hashedPassword = Cryptojs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const stringPassword = hashedPassword.toString(Cryptojs.enc.Utf8);
    stringPassword !== req.body.password &&
      res.status(401).json("wrong credentials");
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn: "1d"}
    );
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { body, validationResult } = require("express-validator");
const { jwtAuthMiddleware, generateToken } = require("../jwt");

//signup routes.......
router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.send({ error: result.array() });
      return;
    }
    // console.log(req.body)

    try {
      const data = req.body;

      const newUser = new User(data);

      const response = await newUser.save();
      console.log("data saved successfully.....");

      const payload = {
        id: response.id,
      };

      console.log(JSON.stringify(payload));

      const token = generateToken(payload);
      console.log("token is : ", token);

      res.status(200).json({ response: response, token: token });
    } catch (error) {
      //console.log(error);
      res.status(404).json({ error: "Internal server error......" });
    }
  }
);

//loging Route....
router.post("/login", async (req, res) => {
  try {
    //extract adharCardNumber and password from request body
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //if user does not exist or passwrod does not match, return error
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    //generate token
    const payload = {
      id: user.id,
    };
    const token = generateToken(payload);
     console.log("logged in successfully!!!")
    //return token as response
     res.json({ success: true, token: token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser")
const { validationResult, body } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jatin$patel"; // is a variable that contains a secret key or passphrase used for signing JSON Web Tokens (JWT).

// Route 1 :creact a User using: POST "/api/auth/createuser". no Login required
router.post(
  "/createuser",
  [
    body("name", "Name Must Be Minimum 3 Characters").isLength({ min: 3 }),
    body("email", "Please Enter Valid Email").isEmail(),
    body("password", "Password Must Be Atlest 5 Characters.").isLength({
      min: 5,
    }),
  ] /*for validation do code in []array */,
  async (req, res) => {
    // if any error then retun bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check user with this email is already exist.
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a User With This Email Already Exist." });
      }

      // Generate secure Password using bcrypt
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);

      // if user dose not exist create user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });

      // Generate secure token using jsonwebtoken(JWT)
      const data = {
        user: {
          id: user.id,
        },
      };

      const token = jwt.sign(data, JWT_SECRET);

      res.json({
        token,
        message: "congratulations your account has been successfully created",
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some internal server error occured");
    }
  }
);

// Route 2 :Authenticate a User using: POST "/api/auth/login". Login required
router.post(
  "/login",
  [
    body("email", "Plase Enter Valid Email").isEmail(),
    body("password", "Password cannot Be Blank").exists(),
  ],
  async (req, res) => {
    // if any error then retun bad request and error.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // verify User with Email and Password.

    const { email, password } = req.body; // its login email and password.

    try {
      //cheking emiail id correct or not.
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please Enter Correct Username And Password" });
      }

      // cheking password is correct for this email id.
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res
          .status(400)
          .json({ error: "Please Enter Correct Username And Password" });
      }

      //Get user auth tokon if user emial and password is right.
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ token });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some internal server error occured");
    }
  }
);

// Route 3 :Get Logdin User Details  using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser ,async (req, res) => {
  
  try {
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user)
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some internal server error occured");
  }
});

module.exports = router;

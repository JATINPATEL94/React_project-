const jwt = require("jsonwebtoken");
const JWT_SECRET = "jatin$patel";

const fetchuser = (req, res, next) => {
  // Get use from JWT Tokon and id to req. object.
  const tokon = req.header("auth-token");
  if (!tokon) {
    res.status(401).send({ error: "Please Authenticate Using A Valid Tokon" });
  }
  try {
    const data = jwt.verify(tokon, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({error: "Please Authenticate Using A Valid Tokon"})
  }
};
module.exports = fetchuser;

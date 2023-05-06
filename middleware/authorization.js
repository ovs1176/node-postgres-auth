const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    //   Get token from the header
    const token = req.header("token");

    if (!token) {
      return res.status(403).json({ error: "Unauthorized" });
    } else {
      //verify the token if it exists and assign the user to a variable
      const payload = jwt.verify(token, process.env.JWTSECRET);

      if (payload) {
        //set the req.user to have the value of the payload.user i.e. the user_id
        req.user = payload.user;
      } else {
        res.status(403).json({ error: "Unauthorized" });
      }
    }
  } catch (err) {
    //   err.message = invalid signature
    res.status(403).json({ error: "Unauthorized" });
  }

  next();
};

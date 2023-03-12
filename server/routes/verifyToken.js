const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  const token = authHeader && authHeader.split(" ")[1];
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (e, user) => {
      if (e) {
        return res.status(403).json("token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("you arent authenticated");
  }
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you arent allowed to do thiss");
    }
  });
};


module.exports = { verifyToken, verifyTokenAdmin };


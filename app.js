
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes/userAuth");
const PORT = process.env.PORT || 8000;

//MIDDLEWARES
app.use(express.json()); //to return files as json
app.use(cors()); //for cross origin  files

//ROUTES
app.use("/auth", route);


//SERVER PORT
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

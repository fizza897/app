const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./dataBase/dataBase");

connectDatabase();
dotenv.config({ path: "backned/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

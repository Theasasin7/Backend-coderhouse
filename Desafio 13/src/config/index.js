import dotenv from "dotenv";

dotenv.config();

export default {
  MONGO_PWD: process.env.MONGO_PWD || "cjWPXTVlW9j81oR5",
  MONGO_STR: process.env.MONGO_STR || "mongodb://localhost:27017/clase-24",
  MONGO_USR: process.env.MONGO_USR || "ulises",
  PORT: process.env.PORT || 8080,
};

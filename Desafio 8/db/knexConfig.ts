export const productsDBConfig = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "products",
  },
  pool: { min: 0, max: 7 },
};

export const messagesDBConfig = {
  client: "sqlite3",
  connection: { filename: "./db/ecommerce.sqlite" },
  useNullAsDefault: true,
};

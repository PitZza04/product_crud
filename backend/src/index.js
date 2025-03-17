import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import productRoutes from "./routes/products/index.js";

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
); // helmet is a security middleware that helps you protect your app by setting various HTTP headers

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// async function initDB() {
//   try {
//     const sql = `
//     CREATE TABLE IF NOT EXISTS products (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         price DECIMAL(10,2) NOT NULL,
//         stock INT NOT NULL DEFAULT 0,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );`;
//     const [result] = await pool.query(sql);

//     console.log("Initializing database: ", result);
//   } catch (error) {
//     console.log("Error initDB", error);
//   }
// }

// initDB().then(() => {
//   app.listen(port, () => {
//     console.log(`Listening on port: ${port}`);
//   });
// });

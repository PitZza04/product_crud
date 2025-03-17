import { pool } from "../../config/db.js";

export async function listProducts(req, res) {
  try {
    const [products] = await pool.query(`SELECT * FROM products`);
    res.json(products);
  } catch (error) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const [product] = await pool.query(`SELECT * FROM products WHERE id = ?`, [
      id,
    ]);

    if (!product) {
      res.status(400).send({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function createProduct(req, res) {
  try {
    const { name, price, stock } = req.body;

    const [newProduct] = await pool.query(
      `INSERT INTO products(name, price, stock) VALUES(?, ?, ?)`,
      [name, price, stock]
    );
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("createProduct error");
    res.status(500).send(error);
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    const sql = `UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?`;
    const [result] = await pool.query(sql, [name, price, stock, id]);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteProduct(req, res) {
  try {
    const id = Number(req.params.id);

    const [deletedProduct] = await pool.query(
      "DELETE FROM products where id = ?",
      [id]
    );

    if (deletedProduct) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Product was not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

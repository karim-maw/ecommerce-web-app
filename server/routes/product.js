const { verifyToken, verifyTokenAdmin } = require("./verifyToken");
const Cryptojs = require("crypto-js");
const Product = require("../models/Product");
const router = require("express").Router();

//create a product for admin

router.post("/", verifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//get a product by id

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//get all products

router.get("/find/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    let products;

    if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//update a product

router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//delete
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;

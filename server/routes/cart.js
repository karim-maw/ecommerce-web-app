const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyTokenAdmin } = require("./verifyToken");

//create

router.post("/", async (req, res) => {
  const { userId, productId } = req.body;
  console.log(productId)
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [{ productId }] });
    } else {
      const productIndex = cart.products.findIndex(
        (product) => product.productId === productId
      );
      if (productIndex > -1) {
        cart.products[productIndex].quantity += 1;
      } else {
        cart.products.push({ productId });
      }
    }
    await cart.save();

    res.status(200).send(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//get user order

router.get("/find/:id", async (req, res) => {
  try {
    const orders = await Cart.find({ userId: req.params.id });
    res.status(200).json(orders);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//get all

router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const orders = await Cart.find();
    res.status(200).json(orders);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;

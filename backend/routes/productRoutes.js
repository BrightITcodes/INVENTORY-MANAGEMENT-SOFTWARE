const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;

// NEW// const express = require("express");
// const router = express.Router();
// const protect = require("../middleWare/authMiddleware");
// const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require("../controllers/productController");
// const { upload } = require("../utils/fileUpload");
// router.post("/id", protect, upload.single("image"), createProduct);
// router.patch("/id", protect, upload.single("image"), updateProduct);
// router.get("/", protect,  getProducts);
// router.get("/:id", protect,  getProduct);
// router.delete("/id", protect,  deleteProduct);
// router

// module.exports = router;

//####OLD//const express = require("express");
// const router = express.Router();
// const protect = require("../middleWare/authMiddleware");
// const {
//   createProduct,
//   getProducts,
//   getProduct,
//   deleteProduct,
//   updateProduct,
// } = require("../controllers/productController");
// const { upload } = require("../utils/fileUpload");

// router.post("/", protect, upload.single("image"), createProduct);
// router.patch("/:id", protect, upload.single("image"), updateProduct);
// router.get("/", protect, getProducts);
// router.get("/:id", protect, getProduct);
// router.delete("/:id", protect, deleteProduct);

// module.exports = router;

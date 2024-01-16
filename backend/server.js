const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const contactRoute = require("./routes/contactRoutes");
const errorHandler = require("./middleWare/errorMiddleWare");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://inventory-management-software-neon.vercel.app/",
    ],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/contactus", contactRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// const dotenv = require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const contactUS = require("./routes/contactRoutes");
// const errorHandler = require("./middleWare/errorMiddleWare");
// const cookieParser = require("cookie-parser");
// const path =require ("path");
// const { contactUs } = require("./controllers/contactController");

// // Initialize expresssss
// const app = express();

// // Middlewares
// app.use(express.json());

// app.use(cookieParser());

// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors ());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// //

// // Routes Middleware
// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
//  app.use("/api/contactus", contactUs);
// //Routes
// app.get("/", (req, res) => {
//   res.send("Welcome Home Page ");
// });
// // Error Middleware
// app.use(errorHandler);

// // Connect to MongoDB and start server
// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server Running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//   });

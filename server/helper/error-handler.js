const errHandler = (err, req, res, next) => {
  console.error("ERROR:", err); 

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errHandler;
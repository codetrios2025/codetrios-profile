export const errorHandler = (err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: err.message || "Server Error",
  });
};

export const notFound = (req, res, next) => {
  res.status(404).json({ message: "Route not found" });
};

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const xss = require("xss-clean");
const connectDB = require("../backend/config/db.js");

dotenv.config();
const app = express();

// Security Middlewares
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 }));

// Connect DB
connectDB();

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Secure API working ✅" });
});

// Route Imports
const user = require("./routes/userRoutes");
const socialRoutes = require("./routes/socialRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const addressRoute = require("./routes/addressRoutes");
const headerRoute = require("./routes/headerRoutes");
const whoweareRoute = require("./routes/whoweareRoutes");
const whoweoffermainRoute = require("./routes/whoweoffermainRoutes");
const homeservicesRoute = require("./routes/homeservicesRoutes");
const homeservicesimageRoute = require("./routes/homeservicesimageRoutes");
const teamRoutes = require("./routes/teamRoutes");
const jointeamsRoutes = require("./routes/jointeamsRoutes");
const improvementRoutes = require("./routes/improvementRoutes");
const keyprojectRoutes = require("./routes/keyprojectRoutes");
const missionRoutes = require("./routes/missionRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const valuesRoutes = require("./routes/valuesRoutes");
const infraRoutes = require("./routes/infraRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const keyheadingRoute = require("./routes/keyheadingRoute");
const blogsRoute = require("./routes/blogsRoutes");
const globalSearchRoutes = require("./routes/globalSearchRoutes");
const policiesRoutes = require("./routes/policiesRoutes");
const videoRoutes = require("./routes/videoRoutes");
const projectservicesRoutes = require("./routes/projectservicesRoutes");
const iconservicesRoutes = require("./routes/iconservicesRoutes");
const contactusRoutes = require("./routes/contactusRoutes");
const serviceDetailsRoutes = require("./routes/servicedetailsRoutes");
const assuranceoverviewRoutes = require("./routes/assuranceoverviewRoutes");
const customersRoutes = require("./routes/custmoresRoutes");
const downloadRoutes = require("./routes/downloadRoutes");
const whychooseUsRoutes = require("./routes/whychooseUsRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const carrerhomeRoutes = require("./routes/carrerhomeRoutes");
const mapRoutes = require("./routes/mapRoutes");
const downloadType = require("./routes/downloadTypeRoutes");
const fooddownloadType = require("./routes/fooddownloadTypeRoutes");
const fooddownloadRoutes = require("./routes/fooddownloadRoutes");

app.use("/api/v1", user);
app.use("/api/v1/banners", bannerRoutes);
app.use("/api/v1/social", socialRoutes);
app.use("/api/v1/address", addressRoute);
app.use("/api/v1/header", headerRoute);
app.use("/api/v1/whoweare", whoweareRoute);
app.use("/api/v1/keyheading", keyheadingRoute);
app.use("/api/v1/whoweoffermain", whoweoffermainRoute);
app.use("/api/v1/homeservices", homeservicesRoute);
app.use("/api/v1/homeservicesimage", homeservicesimageRoute);
app.use("/api/v1/team", teamRoutes);
app.use("/api/v1/jointeams", jointeamsRoutes);
app.use("/api/v1/improvement", improvementRoutes);
app.use("/api/v1/keyproject", keyprojectRoutes);
app.use("/api/v1/mission", missionRoutes);
app.use("/api/v1/sector", sectorRoutes);
app.use("/api/v1/values", valuesRoutes);
app.use("/api/v1/about", aboutRoutes);
app.use("/api/v1/infra", infraRoutes);
app.use("/api/v1/blog", blogsRoute);
app.use("/api/v1/policies", policiesRoutes);
app.use("/api/v1/video", videoRoutes);
app.use("/api/v1/projectservices", projectservicesRoutes);
app.use("/api/v1/iconservices", iconservicesRoutes);
app.use("/api/v1/contactus", contactusRoutes);
app.use("/api/v1/servicedetails", serviceDetailsRoutes);
app.use("/api/v1/assurance", assuranceoverviewRoutes);
app.use("/api/v1/customers", customersRoutes);
app.use("/api/v1/whychooseus", whychooseUsRoutes);
app.use("/api/v1/downloads", downloadRoutes);
app.use("/api/v1/fooddownloads", fooddownloadRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/application", applicationRoutes);
app.use("/api/v1/carrers", carrerhomeRoutes);
app.use("/api/v1/maps", mapRoutes);
app.use("/api/v1/downloadtypes", downloadType);
app.use("/api/v1/fooddownloadtypes", fooddownloadType);

// Add the global search route
app.use("/api/v1/search", globalSearchRoutes);

// rest API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to TQcert app</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

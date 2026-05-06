const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/* ── CORS Configuration ── */
const allowedOrigins = [
  "https://jigisharetail.com",
  "https://www.jigisharetail.com",
  "http://localhost:5173", // Vite default
  "http://localhost:8080", // Vite default
  "http://localhost:8081", // Vite default
  "http://localhost:3000", // React default
];

// If you have FRONTEND_URL in .env, add it to the list dynamically
if (process.env.FRONTEND_URL) {
  // We remove trailing slashes to prevent matching errors
  const formattedUrl = process.env.FRONTEND_URL.replace(/\/$/, "");
  if (!allowedOrigins.includes(formattedUrl)) {
    allowedOrigins.push(formattedUrl);
  }
}

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS blocked for origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

/* ── Middleware ── */
app.use(cors(corsOptions));
app.use(express.json());

/* ── Routes ── */
app.get("/", (req, res) => {
  res.json({ message: "Jigisha backend is running!", status: "ok" });
});

app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Main API Routes
app.use("/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);

/* ── 404 handler ── */
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found." });
});

/* ── Global error handler ── */
app.use((err, req, res, next) => {
  // If the error comes from CORS
  if (err.message.includes("Not allowed by CORS")) {
    return res.status(403).json({
      success: false,
      error: "CORS policy: This origin is not allowed access."
    });
  }

  console.error("Unhandled error:", err.stack);
  res.status(500).json({ success: false, error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`✅ Allowed Origins: ${allowedOrigins.join(", ")}`);
});
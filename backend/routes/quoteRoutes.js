const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { body, validationResult } = require("express-validator");
const { sendQuoteEmail } = require("../utils/emailService");
const router = express.Router();

/* ── Ensure uploads folder exists ── */
const UPLOADS_DIR = path.join(__dirname, "../uploads");
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

/* ── Multer — disk storage, 2 MB limit, docs only ── */
const ALLOWED_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
];

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ts = Date.now();
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
    cb(null, `${ts}_${safe}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIME.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, Word, Excel, JPG, or PNG files are allowed."));
    }
  },
});

/* ── Validation rules ── */
const quoteValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required.")
    .isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters."),
  body("email").trim().notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Enter a valid email address.").normalizeEmail(),
  body("phone").trim().notEmpty().withMessage("Phone number is required.")
    .matches(/^\d{10}$/).withMessage("Enter a valid 10-digit mobile number."),
  body("company").trim().notEmpty().withMessage("Company / Organization is required.")
    .isLength({ min: 2, max: 200 }).withMessage("Company must be between 2 and 200 characters."),
  body("designation").optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body("country").trim().notEmpty().withMessage("Country is required.").isLength({ max: 100 }),
  body("pinCode").optional({ checkFalsy: true }).trim().isLength({ max: 20 }),
  body("city").optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body("state").optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body("projectScale").trim().notEmpty().withMessage("Please select a project scale.").isLength({ max: 100 }),
  body("budget").optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body("timeline").optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body("details").trim().notEmpty().withMessage("Please describe your requirements.")
    .isLength({ min: 20, max: 5000 }).withMessage("Details must be between 20 and 5000 characters."),
  body("acceptPrivacy").custom((v) => v === true || v === "true")
    .withMessage("You must accept the privacy policy."),
];

/* ── POST /api/quote ── */
router.post("/", (req, res, next) => {
  upload.single("attachment")(req, res, (err) => {
    if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ success: false, error: "File is too large. Maximum size is 2 MB." });
    }
    if (err) {
      return res.status(400).json({ success: false, error: err.message });
    }
    next();
  });
}, quoteValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const {
    fullName, email, phone, company,
    designation = null, country,
    pinCode = null, city = null, state = null,
    serviceCategory = null, productCategory = null, product = null,
    projectScale, budget = null, timeline = null, details,
  } = req.body;

  // Build attachment for nodemailer if file was uploaded
  const attachment = req.file
    ? { filename: req.file.originalname, path: req.file.path, contentType: req.file.mimetype }
    : null;

  try {
    await sendQuoteEmail({
      fullName, email, phone, company, designation, country,
      pinCode, city, state, serviceCategory, productCategory, product,
      projectScale, budget, timeline, details, attachment,
    });

    return res.status(201).json({
      success: true,
      message: "Your quote request has been received. Our team will contact you within 24–48 hours.",
    });
  } catch (err) {
    console.error("Error submitting quote request:", err.message);
    return res.status(500).json({
      success: false,
      error: "Something went wrong sending your request. Please try again later.",
    });
  }
});

module.exports = router;

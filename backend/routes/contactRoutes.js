const express = require("express");
const { body, validationResult } = require("express-validator");
const { sendContactEmail } = require("../utils/emailService");
const router = express.Router();

/* ── Validation rules ── */
const contactValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required.")
    .isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters."),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Enter a valid email address.")
    .normalizeEmail(),

  body("phone")
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^\d{10}$/).withMessage("Enter a valid 10-digit mobile number."),

  body("message")
    .trim()
    .notEmpty().withMessage("Message is required.")
    .isLength({ min: 10, max: 2000 }).withMessage("Message must be between 10 and 2000 characters."),
];

/* ── POST /api/contact ── */
router.post("/", contactValidation, async (req, res) => {
  // Return all validation errors at once
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const { name, email, phone = null, message } = req.body;

  try {
    await sendContactEmail({ name, email, phone, message });

    return res.status(201).json({
      success: true,
      message: "Your message has been received. We'll get back to you within one business day.",
    });
  } catch (err) {
    console.error("Error submitting contact form:", err.message);
    return res.status(500).json({
      success: false,
      error: "Something went wrong sending the email. Please try again later.",
    });
  }
});

module.exports = router;

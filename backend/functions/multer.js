const multer = require('multer');
const path = require('path');
const { generateVideoId } = require('./utility');

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set destination folder for uploaded videos
    cb(null, 'videos');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    const uniqueSuffix = generateVideoId();
    const fileExtension = path.extname(file.originalname); // Get file extension
    cb(null, `${uniqueSuffix}${fileExtension}`); // Save file with unique ID
  },
});

// File Filter to Allow Only Video Files
const fileFilter = function (req, file, cb) {
  const allowedTypes = /mp4|mkv|avi|mov/; // Allowed extensions
  const mimetype = allowedTypes.test(file.mimetype); // Validate MIME type
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase()); // Validate extension

  if (mimetype && extname) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Error: Only video files are allowed!')); // Reject file
  }
};

// Configure Multer Middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 100 * 1024 * 1024 }, // Limit file size to 100 MB
});

module.exports = upload;

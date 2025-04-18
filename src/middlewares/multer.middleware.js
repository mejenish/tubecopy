import multer from "multer";

// Use an absolute path for the destination
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/temp');  // Fixed to use an absolute path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({
  storage,
});

const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "certificates",
    resource_type: "auto", // Automatically detects the file type
    access_control: [
      {
        access_type: "token", // Restrict access using token-based authentication
      },
    ],
    format: async (req, file) => "pdf", // Ensure PDFs
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };

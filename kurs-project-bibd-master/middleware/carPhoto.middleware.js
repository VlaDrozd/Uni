const multer = require("multer");

const storage = multer.diskStorage({
    destination: 'photos/',
    filename: function (req, file, cb) {
      const extention = file.originalname.split('.')[1];
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}.${extention}`;
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

var upload = multer({ storage })

module.exports = upload.fields([{ name: 'photo', maxCount: 1 }])

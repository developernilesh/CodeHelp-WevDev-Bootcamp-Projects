const File = require("../models/File");

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("Uploaded file : ", file);

    let path = __dirname + "/files/" + Date.now();

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {}
};

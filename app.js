var express = require("express");
var path = require("path");
const multer = require("multer");
const ejs = require("ejs");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// EJS
app.set("view engine", "ejs");

// Public Folder
app.use(express.static("./public"));

app.post("/send", function(req, res) {
  console.log(req.body.name);
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rv7vit7oa6uz5vhr@ethereal.email",
      pass: "PNfFjDx39uS8j86brc"
    }
  });

  let mailOptions = {
    from: req.body.name + "<" + req.body.email + ">", // sender address
    to: "nikhil.y1299@gmail.com", // list of receivers
    subject: "hey", // Subject line
    text: "hi", // plain text body
    html:
      "<strong>name</strong>-------" +
      req.body.name +
      "<br><strong>email ID</strong>-------" +
      req.body.email +
      "<br><strong>How Did you find us?</strong>-------" +
      req.body.findus +
      "<br><strong>Phone number</strong>-------" +
      req.body.phone +
      "<br><strong>Message</strong>-------" +
      req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  res.redirect("/thankyou");
});
app.post("/sendcareers", function(req, res) {
  console.log(req.body.name);
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rv7vit7oa6uz5vhr@ethereal.email",
      pass: "PNfFjDx39uS8j86brc"
    }
  });

  let mailOptions = {
    from: req.body.name + "<" + req.body.email + ">", // sender address
    to: "nikhil.y1299@gmail.com", // list of receivers
    subject: "hey", // Subject line
    text: "hi", // plain text body
    html:
      "<strong>name</strong>-------" +
      req.body.name +
      "<br><strong>email ID</strong>-------" +
      req.body.email +
      "<br><strong>Designation</strong>-------" +
      req.body.designation +
      "<br><strong>Phone number</strong>-------" +
      req.body.phone +
      "<br><strong>Skills</strong>-------" +
      req.body.skills
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  res.redirect("/thankyou");
});

//multer
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

app.post("/upload", (req, res) => {
  console.log(req.body.name);
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rv7vit7oa6uz5vhr@ethereal.email",
      pass: "PNfFjDx39uS8j86brc"
    }
  });

  let mailOptions = {
    from: req.body.name + "<" + req.body.email + ">", // sender address
    to: "nikhil.y1299@gmail.com", // list of receivers
    subject: "hey", // Subject line
    text: "hi", // plain text body
    html:
      "<strong>name</strong>-------" +
      req.body.name +
      "<br><strong>email ID</strong>-------" +
      req.body.email +
      "<br><strong>Designation</strong>-------" +
      req.body.designation +
      "<br><strong>Phone number</strong>-------" +
      req.body.phone +
      "<br><strong>Skills</strong>-------" +
      req.body.skills
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

  upload(req, res, err => {
    if (err) {
      res.render("index", {
        msg: err
      });
    } else {
      // console.log(req.file);
      // res.send("test");
      if (req.file == undefined) {
        res.render("index", {
          msg: "Error: No File Selected!"
        });
      } else {
        res.redirect("/thankyou");
      }
    }
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/careers", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("index");
});
app.get("/thankyou", function(req, res) {
  res.sendFile(path.join(__dirname + "/thankyou.html"));
});
app.get("/services", function(req, res) {
  res.sendFile(path.join(__dirname + "/services.html"));
});
app.post("/contact", function(req, res) {
  console.log(req.body.name);
});
app.get("/events", function(req, res) {
  res.render("events");
});
app.listen(3000, function() {
  console.log("server is listening");
});

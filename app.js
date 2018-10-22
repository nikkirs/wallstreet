var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

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
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/careers", function(req, res) {
  res.sendFile(path.join(__dirname + "/careers.html"));
});
app.get("/thankyou", function(req, res) {
  res.sendFile(path.join(__dirname + "/thankyou.html"));
});
app.get("/abcd",function(req,res){
  res.send("HI");
});
app.get("/services", function(req, res) {
  res.sendFile(path.join(__dirname + "/services.html"));
});
app.post("/contact", function(req, res) {
  console.log(req.body.name);
});
app.listen(3000, function() {
  console.log("server is listening");
});

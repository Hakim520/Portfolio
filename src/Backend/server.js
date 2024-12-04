const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const appPass = process.env.APP_PASSWORD;


// server used to send send emails
const app = express();
app.use(cors(
  {
    origin: "http://localhost:3000/Portfolio", 
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  }
));
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "hakimkdem@gmail.com",
    pass: appPass
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.first_name + req.body.last_name;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone_number;
  const mail = {
    from: name,
    to: "hakimkdem@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
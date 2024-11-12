const nodemailer = require("nodemailer");



const Email = async (recipient, title, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "turkishpalate@gmail.com",
      pass: "zdaraikstqicnkor",
    }
  });
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Here")
      const message = {
        from: "TokenizedHealthRecords@gmail.com",
        to: recipient,
        subject: title,
        html: content,
      };
      transporter.sendMail(message, () => {
        console.log("email sent");
      });
    }
  });
}


module.exports = Email;
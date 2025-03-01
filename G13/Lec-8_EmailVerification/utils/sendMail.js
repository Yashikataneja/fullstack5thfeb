// const nodemailer = require("nodemailer");

// const sendMail = (email, subject, message) => {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: "yashika979.be22@chitkara.edu.in",
//             pass: "tjfl dnto ezkj xwfz",
//         },
//     });

//     // async..await is not allowed in global scope, must use a wrapper
//     async function main() {
//         // send mail with defined transport object
//         const info = await transporter.sendMail({
//             from: "yashikataneja584@gmail.com", // sender address
//             to: email, // list of receivers
//             subject: subject, // Subject line
//             text: "Please click the link to verify your email", // plain text body
//             html: `<a href=${message}>Link</a>`, // html body
//         });

//         console.log("Message sent: %s", info.messageId);
//         // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//     }

//     main().catch(console.error);
// };

// module.exports = sendMail;





const nodemailer = require("nodemailer");

// Create a reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // or any email service you use
  auth: {
    user:"yashika979.be22@chitkara.edu.in", // Your email (or use your preferred authentication)
    pass: "zkqe zzyi lxjs dmgd", // Your email password (or app-specific password)
  },
});

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL, // Sender's email
    to: to, // Receiver's email
    subject: subject,
    text: text, // The message content
  };

  // Send the email
  return transporter.sendMail(mailOptions);
};

module.exports = { sendMail };


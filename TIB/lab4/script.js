const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailfortib@gmail.com',
    pass: '1poiuyt22'
  }
});

const mailOptions = {
  from: 'mailfortib@gmail.com',
  to: 'vladrozd2000@gmail.com',
  subject: 'ДРАСТЕ',
  text: 'ХАЙ ХЕЛЛО 👋👋👋'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
const nodemailer = require('nodemailer');

// create transporter for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.handler = async (event, context) => {
  // Test Email
  const info = await transporter.sendMail({
    from: "Slick's Slices <slickslices@example.com>",
    to: 'orders@example.com',
    subject: 'New Order!',
    html: `<p>Your new pizza order is here!</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};

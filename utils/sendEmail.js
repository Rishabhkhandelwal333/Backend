const nodeMailer = require("nodemailer");


const sendEmail = async (options)=>{
    
    console.log(options);
    const transporter = nodeMailer.createTransport({
        host:"smpt.gmail.com",
        port:465,
        service : process.env.SMPT_SERVICE,
        auth:{
            user :process.env.SMPT_MAIL,
            pass :process.env.SMPT_PASSWORD,
        }
    });
    const mailOptions = {
        from :process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.emailMessage,
        html:options.emailMessage,
    };

   await transporter.sendMail(mailOptions);

};
module.exports = sendEmail;
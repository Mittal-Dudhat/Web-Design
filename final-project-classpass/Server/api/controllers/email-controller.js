const nodemailer = require('nodemailer')

exports.sendmail = (req, res) => {
    const obj = req.body


// create function to send mail
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"dudhatmittal25@gmail.com",
        pass:"*&G00dNight&*"
    },
    tls:{
        rejectUnauthorized: false,
    },
})

transporter.sendMail({
    from:"dudhatmittal25@gmail.com",
    to:"dudhat.m@northeastern.edu",
    subject:"Query from User",
    text:"Hi..."+"This is a query from "+obj.username+"   "+obj.query
});
res.json({msg:"successfully"});
}
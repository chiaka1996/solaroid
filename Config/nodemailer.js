import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    // secure: "false",
    auth: {
        user: email,
        pass: password
    }
});

export const mailOptions ={ 
    from: email,
    to: email
};
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'swapnilp@dynamisch.co',
        subject: 'Welcome to the virtual world',
        text: `Welcome to the app, ${name}.Let me know how you get along with the app.`
    })
}
const sendFollowupEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'swapnilp@dynamisch.co',
        subject: 'Hasta la vista',
        text: `Goodbye, ${name}. Let us know what could we have done to not let you leave.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFollowupEmail
}
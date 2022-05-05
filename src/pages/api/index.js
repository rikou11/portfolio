const sgMail = require("@sendgrid/mail");

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const content = {
    to: "bensaadfares@gmail.com",
    from: email,
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}

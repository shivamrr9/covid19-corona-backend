const sgMail = require("@sendgrid/mail");

const apiKey = "";

const router = app => {
  app.get("/health", (req, res) => {
    return res.send("Health Check.. Server is up!! :)");
  });

  app.post("/email", (req, res) => {
    let incomingRequest = JSON.parse(JSON.stringify(req.body));
    let to = incomingRequest.to.split(",");
    let from = incomingRequest.from;
    let subject = incomingRequest.subject;
    let text = incomingRequest.description;

    sgMail.setApiKey(apiKey);

    const msg = {
      to: to,
      from: from,
      subject: subject,
      text: text,
      html: `${text}`
    };

    sgMail.send(msg);

    return res.send({ response: "done" });
  });
};

module.exports = router;

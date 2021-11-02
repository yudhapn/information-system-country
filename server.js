function requireHTTPS(req, res, next) {
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app
  // .use(requireHTTPS)
  .use(express.static("./dist/InformationSystemCountryApp"))
  .get("/*", (req, res) =>
    res.sendFile("index.html", { root: "dist/InformationSystemCountryApp" })
  )
  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

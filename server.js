const express = require("express");
var bodyParser = require("body-parser");
const router = express();
let port = process.env.PORT;
if (port == null || port === "") {
  port = 8000;
}
var cors = require("cors");
const path = require("path");

router.use(cors()); // Allow CORS
router.use(bodyParser.json()); // to support JSON-encoded bodies

// Serving React apps
router.use(express.static(path.join(__dirname, "build")));
// required to serve SPA on heroku production without routing problems; it will skip only 'api' calls
// Further info at: https://stackoverflow.com/questions/62231197/my-crud-app-works-locally-but-not-on-heroku
if (process.env.NODE_ENV === "production") {
  router.get(/^((?!(api)).)*$/, (req, res) => {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  });
}

// router.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const contacts = [
  {
    id: 0,
    name: "Manolo",
    surnames: "López López",
    phone: "971282881",
    email: "manu@fundaciobit.org",
    company: "FBIT",
    sector: "Agricultura",
  },
  {
    id: 1,
    name: "Luis",
    surnames: "Giménez Ruíz",
    phone: "971282481",
    email: "lugi@fundaciobit.org",
    company: "FBIT",
    sector: "Investigación",
  },
];

router.get("/contacts", (req, res) => {
  res.json({ results: contacts });
});

router.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

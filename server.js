const express = require("express");
var bodyParser = require("body-parser");
const router = express();
const port = 4000;
var cors = require("cors");

router.use(cors()); // Allow CORS
router.use(bodyParser.json()); // to support JSON-encoded bodies

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

router.get("/", (req, res) => {
  res.json({ results: contacts });
});

router.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

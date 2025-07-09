const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());

// Express को ये बताता है कि views (EJS templates) किस folder में रखे हैं
app.set("views", path.join(__dirname, "views"));

// View engine को EJS सेट करना ताकि HTML templates को render किया जा सके
app.set("view engine", "ejs");


main()
    .then(() => {
        console.log("connection is successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


app.get("./", (req,res) => {
    res.send("root is working")
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


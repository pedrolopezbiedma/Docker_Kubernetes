const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World Mate <3!");
});

app.listen(4200, () => {
	console.log("Server is running on port 4200");
});

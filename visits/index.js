const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

client.set("visits", 0);

app.get("/", (req, res) => {
	client.get("visits", (err, visits) => {
		res.send(`number of visits is${visits}`);
		client.set("visits", Number.parseInt(visits) + 1);
	});
});

app.listen("4200", () => {
	console.log("server running on port 4200");
});

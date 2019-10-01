// console.log ("main ran")

const express = require("express");
const server =express();

//middleware


// endpoints
server.get("/", (request, response) => {
	// order matters the first argument is the request

	response.send({"api": "testing"});
});


const port = 9000;
server.listen(port, () => console.log(`\n** API on Port $(port) **\n`));


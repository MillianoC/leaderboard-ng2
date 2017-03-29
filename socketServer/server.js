// Declare some JSON no mimic a DB return

var dbReturn = {
  "topScores": [
    {
      "placement": "1",
      "fName": "Ben",
      "lName": "Loos",
      "score": "34945"
    },
    {
      "placement": "2",
      "fName": "Keith",
      "lName": "Chester",
      "score": "929"
    },
    {
      "placement": "3",
      "fName": "Kyle",
      "lName": "Jones",
      "score": "734"
    },
    {
      "placement": "4",
      "fName": "Declan",
      "lName": "McKelvey-Hembree",
      "score": "732"
    },
    {
      "placement": "5",
      "fName": "Zach",
      "lName": "Hartwick",
      "score": "1715"
    },
    {
      "placement": "6",
      "fName": "Alyssa",
      "lName": "Bryant",
      "score": "708"
    },
    {
      "placement": "7",
      "fName": "Torrie",
      "lName": "Masters",
      "score": "682"
    },
    {
      "placement": "8",
      "fName": "Brian",
      "lName": "Pritchett",
      "score": "635"
    },
    {
      "placement": "9",
      "fName": "Megan",
      "lName": "May",
      "score": "634"
    },
    {
      "placement": "10",
      "fName": "Alli",
      "lName": "Litwicki",
      "score": "621"
    },
    {
      "placement": "11",
      "fName": "Dina",
      "lName": "Phillippi",
      "score": "591"
    },
    {
      "placement": "12",
      "fName": "Amber",
      "lName": "Hawkins",
      "score": "582"
    },
    {
      "placement": "13",
      "fName": "Brad",
      "lName": "Harris",
      "score": "484"
    }
  ]
};











// 1.  Very simple websocket server:
// 	1a. Echo incoming message to all connected clients
// 	1b. Generate random numbers and emit to connected clients
var ws = require('nodejs-websocket');

// 2. Server for incoming/outgoing chats
var chatServer = ws.createServer(function (conn) {
	console.log('New Chat connection established.', new Date().toLocaleTimeString());

	// Handle manipluating and broadcasting message from ambassador
	conn.on('text', function (msg) {

        console.log("New message recieved");
		console.log("original" + msg);

		// Turn msg into json to append the db return of scores
		var msgObj = JSON.parse(msg);

		// TODO: Send new user data to DB
		// TODO: Request new top scores


		// Append topScores to the msgObj and re-stingify it to broadcast return
		msgObj.topScores = dbReturn.topScores;
		var newMsg = JSON.stringify(msgObj);


        //console.log("MESSAGE: " + newMsg);


		// Broadcast message to all connected clients
		chatServer.connections.forEach(function (conn) {
			conn.sendText(newMsg);
		});


	});

	// OPTIONAL: Close message to socket server
	conn.on('close', function (code, reason) {
		console.log('Chat connection closed.', new Date().toLocaleTimeString(), 'code: ', code);
	});

	// Error Handler on server side
	conn.on('error', function (err) {
		// only throw if something else happens than Connection Reset
		if (err.code !== 'ECONNRESET') {
			console.log('Error in Chat Socket connection', err);
			throw  err;
		}
	})


// Open port as socket
}).listen(3005, function () {
	console.log('Chat socketserver running on localhost:3005');
});






// // 3. Server for emitting random data.
// // Is this best practice? Starting new server on another port, or can
// // the original server (on 3005) listen to different URL for example and
// // emit other data?
// var dataServer = ws.createServer(function (conn) {
// 	console.log('New Random number connection established, ', new Date().toLocaleTimeString());
//
// 	conn.on('close', function (code, reason) {
// 		console.log('Data connection closed.', new Date().toLocaleTimeString(), 'code: ', code);
// 	});
//
// 	conn.on('error', function (err) {
// 		// only throw if something else happens than Connection Reset
// 		if (err.code !== 'ECONNRESET') {
// 			console.log('Error in random number server', err);
// 		}
// 	})
// }).listen(3006, function () {
// 	console.log('Random number server running on localhost:3006');
// });

// // 4. Generate a random number between 0-10,000, every second
// setInterval(function () {
// 	// Only emit numbers if there are active connections
// 	if (dataServer.connections.length > 0) {
// 		var randomNumber = (Math.floor(Math.random() * 10000) + 1).toString();
// 		console.log(randomNumber);
// 		dataServer.connections.forEach((function (conn) {
// 			conn.send(randomNumber)
// 		}));
// 	}
// }, 1000);

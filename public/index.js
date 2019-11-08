var express = require('express');
var app = express();
var path = require('path');
const cors = require('cors');
const port = 3001;
app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});

var ethplorerClient = require('ethplorer-node');
// Public API
var api_key = "free_api";
var client = new ethplorerClient();
var client = new ethplorerClient(api_key);
var limit="15";

client.getTokenHistory(limit,function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);
});

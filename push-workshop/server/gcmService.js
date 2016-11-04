// Load modules

var gcm = require('node-gcm');

// Replace these with your own values.
var apiKey = "AIzaSyAbdEWB0st-QHQMvtq1SldipSQJd_0kOzg";
var deviceID = "cA1yr1__DVM:APA91bEStKOplaJjeQZJXJEiblRivzPQV5bEA-GyiIEMmDBnutfWmMyAbfrooL8NneTnimubNQZ7rLG-dvpKBj_dlzVbevBqVpSzb1R1xTJzFGTGs4zUTsVVqKwzvqT60CWXya6vlE2D";
//var deviceID = "b431bf4893c69463704eef334cbe6ac93e2b9a26b5c994ddf776a9604b90e921";
var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', 'Hello, World');
message.addData('body', 'This is a notification that will be displayed ASAP.');
//message.addData('content-available', '1');
message.addData('actions', [
  { "icon": "accept", "title": "Accept", "callback": "app.accept"},
  { "icon": "reject", "title": "Reject", "callback": "app.reject"},
]); 
/* message.addData('url', 'cats'); */
service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
});

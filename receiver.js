var client = require('./redisClient');

// 消息订阅
client.subscribe('testPublish');

// 1. node receiver.js
// 2. node publisher.js
// 监听消息
client.on('message', function(channel, msg) {
	console.log('消息中介, channel: ', channel, ' message: ', msg);
})
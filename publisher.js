var client = require('./redisClient');

// 消息发布
client.publish('testPublish', 'message from publisher.js');
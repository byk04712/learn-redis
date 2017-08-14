// 导入 redis
const redis = require('redis');

// 连接redis
const client = redis.createClient(6379, 'localhost');

// 设置值
// client.set('hello', 'This is a value');
// client.set('hello', {a:1, b:2});

// 获取值
client.get('hello', function(err, value) {
	if (err) {
		console.warn(err);
	}
	console.log('redis get hello：', value, typeof value);
})

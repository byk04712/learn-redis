const client = require('./redisClient');

// 从左边存值
client.lpush('testlists', 'l1');
client.lpush('testlists', 'l2');
// 从右边存值
client.rpush('testlists', 'a');
client.rpush('testlists', 'b');
client.rpush('testlists', 'c');
client.rpush('testlists', 'd');
client.rpush('testlists', 2017);

// 左出栈
client.lpop('testlists', function(err, value) {
	console.log('左出栈', err, value);
});

// 右出栈
client.rpop('testlists', function(err, value) {
	console.log('右出栈', err, value);
});

// 取值， 从第1位开始，取到结束位
client.lrange('testlists', 0, -1, function(err, lists) {
	if (err) {
		console.log('出错了', err);
	}
	console.log('列表取值', lists);
});
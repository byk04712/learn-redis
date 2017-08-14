var client = require('./redisClient');


// set 存值
client.sadd('testSet', 1);
client.sadd('testSet', 'a');
client.sadd('testSet', false);
client.sadd('testSet', ['arr1', 'arr2']);
client.sadd('testSet', {a:'a',b:'b'});


// set 取值
client.smembers('testSet', function(err, value) {
	console.log('set取值', value);
});
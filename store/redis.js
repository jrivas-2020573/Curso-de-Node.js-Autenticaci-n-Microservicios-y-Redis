const redis = require('redis');
const config = require('../config');

const client = redis.createClient({
    // host: config.redis.host,
    // port: config.redis.port,
    // password: config.redis.password
    url: `redis://default:WueuOYjM7yY7ByMGWzEat8JYxwIi80Q3@redis-10978.c275.us-east-1-4.ec2.cloud.redislabs.com:10978`
});

  (async () => {
    await client.connect();
    console.log('Conectado a REDIS');
  })();
  
  module.exports = {
    async list(table) {
      const value = await client.get(table);
      return JSON.parse(value);
    },
  
    async get(table, id) {
      const value = await client.get(`${table}_${id}`);
      return JSON.parse(value);
    },
  
    async upsert(table, data) {
      let key = table;
      if (data && data.id) {
        key += '_' + data.id;
      }
      await client.setEx(key, 10, JSON.stringify(data));
      return true;
    }
  };

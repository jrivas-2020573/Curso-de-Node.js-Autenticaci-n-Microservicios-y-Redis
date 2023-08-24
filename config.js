module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.PORT_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "not a secret",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "sql9.freemysqlhosting.net",
    user: process.env.MYSQL_USER || "sql9641415",
    password: process.env.MYSQL_PASS || "szuIyYJRrW",
    database: process.env.MYSQL_DB || "sql9641415",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003,
  },
  redis: {
    host: process.env.REDIS_HOST || "redis-10978.c275.us-east-1-4.ec2.cloud.redislabs.com",
    port: process.env.REDIS_PORT || "10978",
    password: process.env.REDIS_PASS || "WueuOYjM7yY7ByMGWzEat8JYxwIi80Q3"
  }
};

const pgp = require('pg-promise')();

const { env } = process;

const config = {
  host: `${env.POSTGRES_HOST || 'postgres'}`,
  port: `${env.POSTGRES_PORT || 5432}`,
  database: `${env.POSTGRES_DB || 'db'}`,
  user: `${env.POSTGRES_USER || 'dev'}`,
  password: `${env.POSTGRES_PASSWORD || 'secret'}`,
  ssl: false
};

const db = pgp(config);

module.exports = db;

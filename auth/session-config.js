const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const configuredKnex = require('../database/dbConfig.js');


module.exports = {
    name: 'monster',
    secret: 'keep it secret, keep it safe!',
    cookie: {
      secure: false, //use cookie over https only
      httpOnly: true, //false means can JS access the cookie on the client
      maxAge: 1000 * 60 * 10, //milliseconds
      },
    resave: false, //avoid recreating unchanged sessions
    saveUninitialized: false, //GDPR compliance
    store: new KnexSessionStore({
      knex: configuredKnex,
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 30, //delete expired sessions
    })
  }
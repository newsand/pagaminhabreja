/**
 * Test environment settings
 *
 * Environment to spin databases for Mocha testing
 *
 */

module.exports = {

   connections: {
     //Test database, only used in Mocha
     testMongodb: {
       adapter: 'sails-mongo',
       host: 'localhost',
       port: 27017,
       // user: 'username',
       // password: 'password',
       database: 'bunitaoDB_test'
     },
   },
   models: {
     connection: 'testMongodb',
     migrate: 'drop'
   }

};

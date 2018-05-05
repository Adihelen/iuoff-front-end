export default function(server) {
  server.loadFixtures('packages', 'users');
  // console.log('server from mirage:', server);
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}

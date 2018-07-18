//import { Response } from 'ember-cli-mirage'; //REF: http://www.ember-cli-mirage.com/docs/v0.3.x/defining-routes/#dynamic-status-codes-and-http-headers
//let sleep = 250;

//export default function() {
//  // nameSpace =  dashboard/
//  this.get('/dashboard/user/authentications', () => { 

//    return {
//      "user/authentication": {
//        "token": "3ubhU-QetZMMmqIYB-j2UFWoN2haABA2q38TwEJShjDhKvslkDRLgVoQrtGzMGf7KOtHBm8CT1junvp_ke0KzVZ23gm4BcbgevNa5qtoD_mlw7jwMkKoR4de9xyFmbimccJ-xN3H4E8Mp_yM-274jAi7NxoEiV53xi3du6lYVR0fYKrZ0",

//        "packageOverview": true, // Chave Pacotes:
//        "createPackage": true, // Chave adicionar pacotes      
//      }
//    };
//  });
  
//  // crud users
//  this.post('/dashboard/users', (schema, request) => {
//    this.timing = sleep;   
//    var _body = JSON.parse(request.requestBody);
//    console.log("users objeto a ser salvo", _body, request.requestBody);   
    
//    return {
//      users: {
//        id: 1
//      }
//    };
//  });

//  this.get('/dashboard/users', (schema) => {
//    this.timing = sleep;
//    var params = JSON.parse(schema.users.all);
//    console.log("GET users: ", params);

//    return schema.users.all().models;
//  });

//  this.get('/dashboard/users/:id', (schema, request) => {
//    this.timing = sleep;
//    var usersId = request.params.id;

//    // Get one Element
//    let users = schema.users.find(usersId);
//    var params = JSON.parse(request.requestBody);
//    console.log("GET users/:id ", params, request.requestBody);

//    return users;
//  });

//  this.delete('/dashboard/users/:id', (schema, request) => {
//    this.timing = sleep;
//    var id = request.params.id;

//    console.log("DELETE: life/users/:id", id);

//    return {};
//  });

//  // login
//  this.post('/dashboard/logins', (schema, request) => {
//    this.timing = sleep;   
//    var _body = JSON.parse(request.requestBody);
//    console.log("users a logar", _body, request.requestBody);   
    
//    return {
//      logins: {
//        id: 1
//      }
//    };
//  });

//  // pacotes
//  // this.get('dashboard/package-overviews', (schema, request) => {
//  //   this.timing = sleep;

//  //   let filters = {};
//  //   let offset = request.queryParams.offset ? parseInt(request.queryParams.offset) : 0;
//  //   let finishOn = offset + parseInt(request.queryParams.limit);
//  //   let startOn = offset;

//  //   let packageOverviews = schema.packageOverviews.where(filters);  

//  //   // ver pacotes filtrados por nome
//  //   if (request.queryParams.name) {
//  //     packageOverviews = packageOverviews.filter((packageItem) => {
//  //       if (request.queryParams.name == packageItem.name) {
//  //         return true;
//  //       }
//  //       return false;
//  //     });
//  //   }  
//  //   // order by name
//  //   packageOverviews = packageOverviews.sort(function (a, b) {
//  //     if (request.queryParams.sort === 'name') {
//  //       if (request.queryParams.direction === "ASC") {
//  //         return a.prize < b.prize ? -1 : 1;
//  //       } else {
//  //         return a.prize > b.prize ? -1 : 1;
//  //       }
//  //     } 

//  //   });

//  //   // aplica limite de itens
//  //   // #reminf, package é uma palavra reservada , por isso packageItem ao invés de package
//  //   packageOverviews = packageOverviews.filter(function (packageItem, index) {
//  //     return startOn <= index && finishOn > index;
//  //   });

//  //   return {
//  //     "package-overview": packageOverviews.models,    
//  //   };
//  // });

 
 
//  this.get('/dashboard/packages', (schema) => { 
//    // var params =  JSON.stringify(schema.packages.all().models);  
//    // console.log('GET packages: ', params);
//    return schema.packages.all().models;
//  });
 
//  this.get('/dashboard/packages/:id', (schema, request) => {
//    this.timing = sleep;
//    var packageId = request.params.id;

//    // Get one Element
//    let packages = schema.packages.find(packageId);
//    // var params = JSON.parse(request.requestBody);
//    // console.log("GET packages/:id ", params, request.requestBody);

//    return {
//      packages: {
//        id: 1
//      }
//    };
//  });

  
  

  
//  // These comments are here to help you get started. Feel free to delete them.

//  /*
//    Config (with defaults).

//    Note: these only affect routes defined *after* them!
//  */

//  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
//  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
//  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

//  /*
//    Shorthand cheatsheet:

//    this.get('/posts');
//    this.post('/posts');
//    this.get('/posts/:id');
//    this.put('/posts/:id'); // or this.patch
//    this.del('/posts/:id');

//    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
//  */
//}

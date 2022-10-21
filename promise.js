let p = new Promise((resolve, reject) => {

 

    resolve("Success");

 

    reject("Failed");

  

});



p.then((message) => {

  console.log(`This is  ${message}`);

}).catch((message) => {

  console.log(`This is  ${message}`);

});

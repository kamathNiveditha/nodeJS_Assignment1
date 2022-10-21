const myPromise = new Promise((resolve, reject) => {

  let a = true;

  setTimeout(() => {
    return (a) ? resolve('a is present!'): reject(' no a');
  }, 300);
}); 

myPromise
.then(value => { console.log(value) })
.catch(err => { console.log(err) });



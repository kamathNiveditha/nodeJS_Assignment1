let p = new Promise((resolve, reject) => {
    let b= 2 * 1, c=3;
    if (b == 2 && c == 3) {
      resolve("Successful");
    } else {
      reject("Failure");
    }
  });
  
  p.then((message) => {
    console.log(`This is in the then; state resolved: ${message}`);
  }).catch((message) => {
    console.log(`This is in the catch; state rejected: ${message}`);
  });
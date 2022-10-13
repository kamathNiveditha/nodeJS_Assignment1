const fs = require("fs");

async function writeFile(filename, txt) {
  try {
    await fs.promises.writeFile(filename, txt);
    console.log("File created successfully");
  } catch (err) {
    console.log(err);
  }
}
writeFile("Welcome", "This is a training period nodeJS assignment");
const fs = require("fs");
// console.log("✈️  js: ", js);

// let readFileSync = fs.readFileSync("./even.js", { encoding: "utf-8" });
// console.log("✈️  readFileSync: ", readFileSync);

// CRUD

// 1. Create

// const dataValue = fs.writeFileSync("./note.txt", "Hello");

// fs.writeFile("./note.txt", "Hello", (err) => {
//   if (err) {
//     console.log("✈️  err: ", err);
//   }
// });

// 2. Read

// fs.readFile("./even.js", { encoding: "utf-8" }, (err, data) => {
//   if (data) {
//     console.log("✈️  data: ", data);
//   } else {
//     console.log("✈️  err: ", err);
//   }
// });

// 3. Update

// fs.appendFile("./note.txt", "Hetuk Patel", (err) => {
//   if (err) {
//     console.log("✈️  err: ", err);
//   }
// });

// 4. Delete

// fs.rm("./note.txt", (err) => {
//   if (err) {
//     console.log("✈️  err: ", err);
//   }
// });

// Edit The Text

fs.readFile("./note.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("✈️  err: ", err);
  }

  const value = data.split("");
  console.log("✈️  value: ", value);

  const updateValue = data.replace(
    value.splice(
      value.findIndex((el) => el === "world"),
      1,
    ),
    "",
  );
  console.log("✈️  updateValue: ", updateValue);

  fs.writeFile("./note.txt", updateValue.trim(), (errs, data1) => {
    if (errs) {
      console.log("✈️  errs: ", errs);
    }
    console.log("✈️  data1: ", data1);
  });
});

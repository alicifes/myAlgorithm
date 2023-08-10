// const getTable = async () => {
//   await getTable1()
//     .then(() => {
//       console.log("dsdasdasd");
//     })
//     .then(() => console.log("12312312312"));
//   await getTable2();
// };

// const getTable1 = () => {
//   return new Promise((resole, reject) => {
//     console.log("table1");
//     resole();
//   });
// };

// const getTable2 = () => {
//   return new Promise((resole, reject) => {
//     console.log("table2");
//     resole();
//   });
// };

// getTable();

async function asyncFunction1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(10), 1000);
    });
  }
  
  async function asyncFunction2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(20), 100);
    });
  }

async function example() {
   await asyncFunction1().then((value) => {
      console.log("Result from asyncFunction1:", value);
      return value * 2;
    })
    .then((doubledValue) => {
      console.log("Doubled value:", doubledValue);
    });
  const result2 = await asyncFunction2();
  console.log("Result from asyncFunction2:", result2);
}
example();

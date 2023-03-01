// let a = 20;
// let b = 30;
// setTimeout(()=>{
//    b=24;
// },2000);
// console.log(a+b);          // if some vlaue is updated in asynch js how can we handle

//now concept of callbacks,promises,async await comes

let a = 20;
let b = 30;
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(24);
  }, 2000);
});

// waitingData.then(()=>{console.log(a+b)});  //so what happen here is they wait until resolve value executed
// we can do any task inside resolve ()
// after that its value stored in waitingData
//.then executed()

const addition = async () => {
  await setTimeout(() => {
    b = 24;
  }, 2000);

  console.log(a + b); // using async await we can do same things as in promises
};

addition();

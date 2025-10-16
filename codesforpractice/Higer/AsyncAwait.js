// function raining() {
//     return new Promise((israining,isnot)=> {
//          let random = Math.random() < 0.5;
//          let time = Math.random() * 9000 + 1000;
//          setTimeout(()=> {
//           if(random) {
//             israining("it is raining hehhehe");
//           }
//           else {
//             isnot("its not 😭😭");
//           }
//          },time);
//     });
// }

// async function enjoying() {
//     console.log("lets see");
//     try {
//     const rain = await raining();
//     console.log(rain);
//     }
//     catch(err) {
//         console.log("😭😭")
//     }
// }

// enjoying();

async function multisteps() {
    try{
    const step1 = await new Promise((resolve,reject)=> {
        const result = Math.random() < 0.5;
     setTimeout(()=> {
        result ? resolve("it is true") : reject("nope its not");

     }, 2000);
    });
    const step2 = await new Promise((resolve,reject)=> {
        const result = Math.random() < 0.5;
     setTimeout(()=> {
        result ? resolve("it is true") : reject("nope its not");

     }, 2000);
    });
  
    console.log(step1);
    console.log(step2);
  }
  catch(err) {
    console.log();
  }
}

multisteps();
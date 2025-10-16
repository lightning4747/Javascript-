const rain = new Promise((israining, isnot) => {
let is = Math.random() < 0.5;

if(is) {
    israining("yo its raining hehehehehe");
}

else {
    isnot("it not raining 😭😭");
}
});

rain
.then(msg => console.log("Success it raining",msg))
.catch(err => console.log("Nah uh lil bro",err))
.finally(() => console.log("Eitherway"));

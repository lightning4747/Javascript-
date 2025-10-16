function factory(secret) {
  return function(key) {
    if (key === "bow") {
      return secret;
    } else {
      return "nah uh lil bro";
    }
  };
}

const access = factory("ts is a secret")("bow");
console.log(access); // "ts is a secret"

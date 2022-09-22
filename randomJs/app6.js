const types = ["obi", "ada", "emeka", "ebuka"];

for (type of types) {
  console.log(type);
  if (type === "ebuka") {
    console.log("this name is here");
    break;
  }
}

let loading = 0;
while (loading < 15) {
  console.log("web is still loading");
  loading += 1;
}

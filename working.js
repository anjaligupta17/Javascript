//javascript localstorage
// localStorage.clear(); //to clean local storage
// //setIteam
// localStorage.setItem("name", "anjali");
// localStorage.getItem("name");
// localStorage.removeItem("name")
// localStorage.clean();

//JSON(javascript object notation)
obj = { name: "anjali", length: 1, a: { this: "that" } };
jso = JSON.stringify(obj);
console.log(typeof jso);
parsed = JSON.parse(`{"name":"anji","length":1,"b":{"this":"that"}`);
console.log(parsed);
//ECMAScript
//backticks or template literals
a = 43;
console.log(`this is my ${a}`);

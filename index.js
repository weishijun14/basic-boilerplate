async function foo() {
  return await 2;
}

foo().then(function(val) {
  console.log(val);
});
